const foo    = { name: 'tom',   age: 30, nervous: false };
const bar    = { name: 'dick',  age: 40, nervous: false };
const baz    = { name: 'harry', age: 50, nervous: true };


'Bad Code 💩'

console.log(foo);
console.log(bar);
console.log(baz);



'Good Code ✅'

// Computed Property Names

console.log('%c My Friends', 'color: orange; font-weight: bold;' )
console.log({ foo, bar, baz });

// Console.table(...)
console.table([foo, bar, baz])


// // Console.time
console.time('looper')

let i = 0;
while (i < 1000000) { i ++ }

console.timeEnd('looper')

//Stack Trace Logs - Saber donde hemos realizado una acción muy importante

const deleteMe = () => console.trace('bye bye database')

deleteMe();

//Más información y contenido para debugar 
https://blog.bitsrc.io/javascript-debugging-best-practices-e28a09b4528a
