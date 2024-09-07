/**
 * WRITE A JAVASCRIPT CODE TO GET THE EVEN NUMBERS FROM AN ARRAY USING ANY LOOPING TECHNIQUE.
 * INPUT: CONST NUMBERS = [12, 98, 5, 41, 23, 78, 46];
 * OUTPUT: [12, 98, 76, 46];
 */

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for(let i = 0; i <= numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);