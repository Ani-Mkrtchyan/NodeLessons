const argv = require('minimist');
  const res = argv(process.argv.slice(2));
  
  const path = require('path');
  const fs =require('fs');
  const zlib = require('zlib');
  const newFolder = path.join(__dirname, 'lessonZip');
  
  
        fs.mkdir(newFolder, (err) => {
          if (err) throw err
          const folderName = process.argv.slice(2)[0];
          const folderPath = path.join(__dirname, folderName);
          fs.readdir(folderPath, (err, data) => {
              if (err) throw err;
              data.forEach(file =>{
                const fromPath = path.join(folderPath, file);
                const toPath = path.join(newFolder, file);
        
                    fs.createReadStream(fromPath).pipe(zlib.createGzip()).pipe(fs.createWriteStream(toPath + '.gz'));
        
                });
            });
        });