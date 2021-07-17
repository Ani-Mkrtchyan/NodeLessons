const readline = require("readline");
const fs = require("fs");

const path = "./addresses.csv";

const rl = readline.createInterface({
  input: fs.createReadStream(path),
  
});

rl.on("line", function (input) {
    console.log(input);
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



