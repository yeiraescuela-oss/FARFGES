
const { app, BrowserWindow } = require('electron');
app.commandLine.appendSwitch('disk-cache-dir', app.getPath('userData'));

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 750,
    autoHideMenuBar: true
  });

  mainWindow.loadURL('http://localhost/sitio_web/indexlogin.html');
}

app.whenReady().then(createWindow);
