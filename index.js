const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter 1st No: ', (firstNum) => {
  rl.question('Enter 2nd No: ', (secondNum) => {
    firstNum = parseInt(firstNum); // Parse the input string to integer
    secondNum = parseInt(secondNum); // Parse the input string to integer

    if(firstNum > secondNum){
        console.log('okey');
    }
    else{
        console.log('Not bad');
    }

    rl.close();
  });
});

