// ===========================================
// Different ways of writting same funtion 
function isEven(number) {
    let even = number % 2 === 0;
    return even;
}
function isEven2(num) {
    return num % 2 === 0;
}
// arrow function 
const isEven3 = (num) => {       // Follow this way of writting functions 
   return num % 2 === 0;
}
const isEven4 = num =>  num % 2 === 0;  // Only for one line funtions

// ===========================================
