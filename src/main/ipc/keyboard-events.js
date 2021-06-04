import { ipcMain } from 'electron';
import windowManager from '../WindowManager';

/**
 * @param {Electron.IpcMainInvokeEvent} event
 * @param {Electron.KeyboardEvent} keyboardEvent
 */
ipcMain.handle('keyboard-event::keyup', (event, keyboardEvent) => {
  if (keyboardEvent.code === 'keyD' && keyboardEvent.altKey && keyboardEvent.ctrlKey) {
    const win = windowManager.createOrGetWindow('instructions');
    win.loadURL(
      process.env.WEBPACK_DEV_SERVER_URL
        ? process.env.WEBPACK_DEV_SERVER_URL + '#/instructions'
        : `${scheme}://./index.html#/instructions`,
    );
    win.show();
  }
});
