// IIFE -> IMEEDIATELY INVOKED FUNCTION E3XPRESSIONS (IIFE)

(function chai(){// named iife
    console.log('Hello Nicky');

})();
(function aurcode(name){ //named iife
    console.log(`Hello ${name}`);
})('Nicky');

((name) => { // unnamed iife
    console.log(`${name} back to your work`);
})('Niteesh');