const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter radius pls ', (answer) => {
  console.log(`Area is : ${answer*answer*Math.PI.toFixed(2)}`);

  rl.close();
});
