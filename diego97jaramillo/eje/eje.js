let cont = 0;
let num = 0;

var createCounter = function(n) {
    num + n;
    let result = num + cont;
    return function() {
        cont ++;
        return console.log(result);

    };
};

const counter = createCounter(10)
counter // 10
counter() // 11
counter() // 12

console.log('hola');
