const {app,BrowserWindow,dialog,globalShortcut} = require('electron')
const createWindow = () => {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            backgroundColor: "red",
        })
        win.loadFile("index.html")

        let wc = win.webContents;
        wc.on('did-finish-load', () => {
            dialog.showOpenDialog({
                defaultPath: app.getPath('downloads'),
                buttonLabel:'select file'
            })
        })
        // using shortcut key
        globalShortcut.register('k', () => {
            dialog.showOpenDialog({
                defaultPath: app.getPath('desktop'),
            })
        })

    }


    app.whenReady().then(() => {
        createWindow()
    })
