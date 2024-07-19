const { contextBridge, ipcRenderer } = require('electron')

const systemExpose = () => {
    contextBridge.exposeInMainWorld('system', {
        notifyFile: (canceled) => ipcRenderer.on('files-notify', canceled),
        saveFile: (file) => ipcRenderer.send('files-save', file),
        readFiles: (files) => ipcRenderer.on('files-open', files),
        changeOpacity: (value) => ipcRenderer.invoke('opacity:change', value),
        menu: (clicked) => ipcRenderer.invoke(`top-menu:${clicked}`)
    })
}
  
global.systemExpose = systemExpose;