const fs = require('fs');

const FilesJS = fs.readFileSync("./settings/groups/files.js")
const NotarayJS = fs.readFileSync("./settings/groups/notaray.js")
eval(FilesJS.toString())
eval(NotarayJS.toString())

const commands = [
  {
    label : "Files",
    submenu : [
      {
        role: "New File",
        accelerator: "Ctrl+N",
        click : () => {console.log(mainWindow)}
      },
      {
        role: "Open File",
        accelerator: "Ctrl+O",
        click : OpenFile
      },
      {
        role: "Save File",
        accelerator: "Ctrl+S",
        click : SaveFile
      },
    ]
  },
  {
    label: 'Notary',
    submenu: [
    {
      role: 'Reload',
      accelerator: 'Ctrl+R',
      click: Reload
    },
    {
      role: 'Debug',
      accelerator: 'F11',
      click: Debug
    },
    ]
  }
];

global.commands = commands;