const { ipcMain, dialog } = require('electron');
var Files = [];

async function OpenFile()
{
    let data = await dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] });
    if(!data.canceled)
    {
        Files = data.filePaths;

        const filesContent = []
        Files.forEach(file => {
            filesContent.push(fs.readFileSync(file).toString())
        });

        mainWindow.webContents.send("files-open", filesContent);
    }
}

async function SaveFile()
{
    let data = await dialog.showOpenDialog({ properties: ['saveFile'] });
    Files = data.filePaths;

    mainWindow.webContents.send("files-notify", data.canceled);

    ipcMain.on("files-save", (event, data) => {
        fs.writeFileSync(Files[0], data)
    })
}

global.OpenFile = OpenFile
global.SaveFile = SaveFile