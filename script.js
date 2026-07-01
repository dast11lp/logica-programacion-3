const prompt = require('prompt-sync')()



let numero = parseInt(prompt('digite un número: '));

const factorial = (num) => {

    if (num === 0) return 1;

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
        
    }
    return factorial
}

console.log(factorial(numero));

