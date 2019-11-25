const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    },
    titleBarStyle: 'hidden'
  })

  win.setWindowButtonVisibility(false);
  // and load the index.html of the app.
  win.loadFile('player/index.html');
}

app.on('ready', createWindow);

app.on('open-file', (e, path) => {
  e.preventDefault();
  win.webContents.send('path', path);
})

