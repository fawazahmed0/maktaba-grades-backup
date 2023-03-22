
var fs = require('fs');
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
        if (res.ok) {
        let text = await res.text()
        fs.writeFileSync(path.join(__dirname, dirname, count + '.js'), text)
        errorno=0
        }else{
errorno++
        }


        count++;

    }


}
}
test()