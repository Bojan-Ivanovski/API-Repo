const Debug = () => {
    mainWindow.webContents.openDevTools()
}

const Reload = () => {
    mainWindow.reload()   
}


global.Debug = Debug
global.Reload = Reload