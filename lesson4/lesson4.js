var path = require('path');
var fs = require('fs');
function traverse(dir, i) {
    var str = '';
    if(i > 0) {
        for (var j = 0; j < i - 1; j++) {
            str+='\t';
        }
        str+='|';
        str+='__';
    }
    console.log(str + path.basename(dir))
    if (!fs.lstatSync(dir).isDirectory()) {
        return;
    }
    var files = fs.readdirSync(dir);
    i++;
    files.forEach(function(file) {
        traverse(path.join(dir, file), i);
    });
}
traverse('./api-tests', 0);