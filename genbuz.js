// 2-GenBuzz
// Using the Instructions below, write a function that prints numbers from 1 to an upper limit. That upper limit should be passed into your function as an argument.
// Ex. genBuzz(15) should print the genBuzz pattern described below from 1 to the upper limit of 15.
// Instructions: For numbers from 1 to an upper limit (inclusive), print 'Gen' to the console if the number is a multiple of 3, print 'Buzz' if it is a multiple 5, print 'GenBuzz' if it a multiple of both 3 and 5. Otherwise, print the number to the console. Be sure to check that number your upperLimit is of type number.
function genBuzz(input) {
    for (i = 0; i <= input; i++) {
        if (typeof input != 'number') {
            console.log('Input is not a number');
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('GenBuzz');
        } else if (i % 3 === 0) {
            console.log('Gen');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
genBuzz(35);