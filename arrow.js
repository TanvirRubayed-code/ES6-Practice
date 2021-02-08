// function double (num) {
//     return num * 2 ;
// }

// const doubleIt = function myfunc(num) {
//     return num * 2 ;
// }


// ES 6    // arrow function 
const doubleIt = num => num * 3 ;
const add = (x,y) => x + y ;

const giveMe5 = () => 5 ;

const bishalFunction = (x , y) => {
    const sum = x + y ;
    const diff = x - y ;
    const result = sum * diff ;
    return result ;
}

const result = doubleIt(3) ;
console.log(result);

console.log(add(3,4));

console.log(giveMe5());
console.log(bishalFunction(6,1));