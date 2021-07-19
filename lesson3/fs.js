// const readline = require("readline");
// const fs = require("fs");

// const path = "./addresses.csv";

// const rl = readline.createInterface({
//   input: fs.createReadStream(path),
  
// });

// rl.on("line", function (input) {
//     console.log(input);
//   });
const readline = require('readline');
const fs =require('fs');
const path =require('path');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (path) => {
 
  fs.readFile(path,"utf8",(err,data)=>{
    if(err){
      throw err;
    }
    console.log(data);
  });
  rl.close();
});

const  csvtojson = require('csvtojson');
const csvFilePath ="addresses.csv";

csvtojson()
.fromFile(csvFilePath)
.then((jsonObj) => {

    console.log(jsonObj);

 fs.writeFileSync("output.json",JSON.stringify(jsonObj),'utf8',(err)=>{
   console.log(err)});
 
});



