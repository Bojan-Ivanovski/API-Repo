
    const { ipcMain } = require('electron');
    const createIpc = (mainWindow) => {
        ipcMain.handle("top-menu:expand", () => {
            if(mainWindow.isMaximized())
                mainWindow.unmaximize()
            else    
                mainWindow.maximize()
        })

        ipcMain.handle("top-menu:mini", () => {
            mainWindow.minimize()
        })

        ipcMain.handle("top-menu:exit", () => {
            mainWindow.close()
        })

        ipcMain.handle("opacity:change", (event, value) => {
            mainWindow.setOpacity(value)
        })
    }

    global.createIpc = createIpc
  