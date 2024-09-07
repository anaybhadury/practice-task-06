/**
 * USE A FOR..OF LOOP TO CONCATENATE ALL THE ELEMENTS OF AN ARRAY INTO A SINGLE STRING.
 * INPUT: VAR NUMBERS = ['TOM', 'TIM', 'TIN', 'TIK'];
 * OUTPUT: 'TOMTIMTINTIK'
 */

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = '';

for(let element of numbers){
    result += element;
}
console.log(result);