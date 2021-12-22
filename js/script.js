console.log('JS OK!');

// 1 creo una variabile
// 2 ciclo for da 1 a 100
// 3) ciclo if per ogni caso 
// 4) stampa il risultato in pagina



// 1) Creo una variabile 
let result = '';
let numbers = document.getElementById('list');

// 2) ciclo for da 1 a 100

for (let i = 1; i <= 100; i++) {

    // 3) ciclo if per ogni caso 

    // multipli  di 3
    if (i % 3 === 0) {
        result += '<li> Fizz </li>';
        console.log(result)
    }
    // Multipli  di 5
    if (i % 5 === 0) {
        result += '<li> Buzz </li>';
        console.log(result)
    }
    //Multipli di 3 e  5
    if (i % 15 === 0) {
        result += '<li> FizzBuzz </li>';
        console.log(result)
    }
    // non multipli di 3 e 5
    else {
        result += `<li> ${i} </li>`;
        console.log(result)
    }
}


// 4) stampa il risultato in pagina

numbers.innerHTML = result;
console.log(result);