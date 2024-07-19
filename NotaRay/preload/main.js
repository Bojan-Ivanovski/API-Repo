const fs = require("fs")

const getSystem = fs.readFileSync("./preload/system.js")
eval(getSystem.toString())
systemExpose()