function sumFactorial(n){
  let sum = 0;
  let num = 1;
  for(let i =1; i<= n; i++ ) {
    num *= i;
    sum += num;
  }
  return sum;
}


process.on('message', (message) => {
    const sum = sumFactorial(n);
    process.send(sum);
  
});
