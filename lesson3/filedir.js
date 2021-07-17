const fs = require("fs");
const path = require('path');

const getFiles = function (dir, files_){
    
  files_ = files_ || [];
    const files = fs.readdirSync(dir);

    for (const i in files) {

        const name = dir + '/' + files[i];

        if (fs.statSync(name).isDirectory()) {

            getFiles(name, files_);

        } else {
          
            files_.push(name);
        }
    }
    return files_;
};

console.log(getFiles('node_modules'));
