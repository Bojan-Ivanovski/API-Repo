
    const { Menu, MenuItem } = require('electron');
    const fs = require('fs')

    const commandsFile = fs.readFileSync("./settings/commands.js")
    eval(commandsFile.toString())


    const createMenu = () => {

        const menu = new Menu()
        for (let index = 0; index < commands.length; index++) 
            menu.append(new MenuItem(commands[index]))
        Menu.setApplicationMenu(menu)
    }

    global.createMenu = createMenu  
  