const { app, BrowserWindow } = require('electron')

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

  // and load the index.html of the app.
  win.loadFile('player/index.html')
}

app.on('ready', createWindow)