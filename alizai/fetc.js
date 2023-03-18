
var fs = require('fs-extra');
var fetch = require('node-fetch');
const path = require('path');

let folders = `nasai
ibnemaja
mishkaat
tirmizi
abudawood`.split('\n')

let urlpattern = 'https://dashingquill.com/js/'
for (let dirname of folders) {
    fs.mkdirSync(path.join(__dirname, dirname),{recursive: true});
}
async function test(){
var errorno = 0
for (let dirname of folders) {

    let count = 1
   
    errorno = 0
    while (errorno<25) {
        let url = urlpattern + dirname + '/' + count + '.js'

        let res = await fetch(url)
        if (res.status != 404) {
        let text = await res.text()
        fs.writeFile(path.join(__dirname, dirname, count + '.js'), text)
        errorno=0
        }else{
errorno++
        }


        count++;

    }


}
}
test()