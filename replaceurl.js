const fg = require('fast-glob');
const fs = require('fs/promises')
const path = require('path')

async function begin(){
    let pathArr = await fg(path.posix.join('.', '**'), { dot: true });
    for (let htmlFile of pathArr.filter(e=>/\.html$/i.test(e))){
        console.log(htmlFile)
        let data = await fs.readFile(htmlFile, {encoding:'utf8'})
        data = data.replace(/https:\/\/al\-maktaba\.org\/book\/(\d+)\/(\d*)/gi, "/maktaba-grades-backup/$1/$2")
        await fs.writeFile(htmlFile, data)
    }
}
begin()