/**
 * WRITE A JAVASCRIPT CODE TO REVERSE THE ARRAY COLOR WITHOUT USING THE REVERSE METHOD.
 * INPUT: CONST COLORS = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'ORANGE']
 * OUTPUT: ['ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'RED']
 */

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// const reversedArray = colors.reverse()

// console.log(reversedArray);

for(let i = 0; i < colors.length / 2; i++){
    let temp = colors[i];
    colors[i] = colors[colors.length - 1 - i];
    colors[colors.length - 1 - i] =temp;
}
console.log(colors);

