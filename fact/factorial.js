const { fork } = require('child_process');

const factorialProcess = fork('./factorialSum.js');

factorialProcess.on("message", (sumFactorial) => {
    console.log(sumFactorial);
});

factorialProcess.send({ sumFactorial:sumFactorial(n)});

 