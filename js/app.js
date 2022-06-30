console.log('Your JS file is linked!');

//1. GenBuzz Function
//Write your code below this line:

const genBuzz = (num) =>{
    for(ourNumber=1; ourNumber<num; ourNumber++){

            if(typeof ourNumber !== 'number'){
                console.log('This is not a number');
            }else if(ourNumber%15 === 0){
                console.log('GenBuzz');
            }else if(ourNumber%3 === 0){
                console.log('Gen')
            }else if(ourNumber%5 === 0){
                console.log('Buzz')
            }else{console.log(ourNumber);}
        }
    }
    genBuzz(20);

//2. E-Commerce Item list Function
//Write your code below this line:

let storeItem = function(item) {

    switch (item) {
    case 'shoes':
        console.log('Shoes are $50');
        break;
    case 'jeans':
        console.log('Jeans are $25');
        break;
    case 'hat':
        console.log('Hats are $12');
        break;
        case 'socks':
        console.log('Socks are $2');
        break;
    default:
        console.log('Invalid item');
        break;
    }
}
storeItem('shoes');

// 3. Exercise Tracker
//Write your code below this line:

function randomExercises(num) {
	const exercises = ["Push-ups", "Sit-ups", "Bear Crawls", "1 mile run", "60 second plank", "Burpees", "Jumping Jacks","Squats", "Weighted Squats", "Inch Worms"];

    for(i = 0; i < num; i++){
        const arrayLength= exercises.length;
        const randomInt = Math.floor(Math.random()* arrayLength);
        const randExercise = exercises[randomInt];
        console.log(randExercise);
    }
}
randomExercises(4)


//4. Print a random integer
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:
