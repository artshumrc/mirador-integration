import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import MiradorDownload from 'mirador-dl-plugin';
import MiradorDownloadDialogPlugin from 'mirador-dl-plugin';
import miradorSharePlugin from 'mirador-share-plugin';
import miradorShareDialog from 'mirador-share-plugin';

const config = {
  id: 'mirador',
  window: {
    allowClose: false,
    allowFullscreen: true,
    allowMaximize: false,
    panels: {
      annotations: false
    }
  },
  workspace: {
    draggingEnabled: false,
    allowNewWindows: false,
    showZoomControls: true
  },
  theme: {
    palette: {
      primary: {
        main: '#731422',
      },
    },
  },
  workspaceControlPanel: {
    enabled: false
  }
};

var miradorInstance = Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
  MiradorDownload.miradorDownloadPlugin,
  MiradorDownload.MiradorDownloadDialogPlugin,
  miradorSharePlugin.miradorSharePlugin,
  miradorShareDialog.miradorShareDialog
]);
window.miradorInstance = miradorInstance;
window.Mirador = Mirador;
