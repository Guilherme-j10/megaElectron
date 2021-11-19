const { app, BrowserWindow } = require('electron');
const path = require('path');

const createNewWindow = () => {
  const window = new BrowserWindow({
    width: 1250,
    height: 700,
    frame: true,
    show: false,
    icon: path.resolve(__dirname, '.', 'megaconecta.png'),
    webPreferences:{
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  });

  window.menuBarVisible = false;
  window.loadURL('https://pbx.cloudcall.tec.br');
  
  window.once('ready-to-show', () => {
    window.show();
  });
}

app.whenReady().then(() => {
  createNewWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createNewWindow()
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});