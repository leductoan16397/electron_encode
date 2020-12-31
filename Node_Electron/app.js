const { app, BrowserWindow } = require('electron')
function createWindow() {
    const win = new BrowserWindow({
        // width: 800,
        // height: 400,
        width: 1000,
        height: 1000,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenuBarVisibility(false) //partially
    win.webContents.openDevTools()

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
