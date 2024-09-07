/**
 * REVERSE THE WORDS OF A SENTENCE. ONLY THE POSITION OF THE WORD WILL BE REVERSED. CHECK OUT THE OUTPUT
 * INPUT: CONST STATEMENT = 'I AM A HARD WORKING PERSON'
 * OUTPUT: 'PERSON WORKING HARD A AM I'
 */

const statement = 'I am a hard working person';

const wordArray = statement.split(' ');

const reveredArray = wordArray.reverse();

const joinArray = reveredArray.join(' ');

console.log(joinArray);

/**
 * REVERSE THE WORDS OF A SENTENCE. ONLY THE POSITION OF THE WORD WILL BE REVERSED. CHECK OUT THE OUTPUT
 * INPUT: CONST STATEMENT = 'I Love Bangladesh'
 * OUTPUT: 'Bangladesh Love I'
 */

const statements = 'I Love Bangladesh';

const wordSplit = statements.split(' ');

const reversedArray2 = wordSplit.reverse();

const joinArray2 = [reversedArray2.join(' ')];

console.log(joinArray2);