const exerciseArray = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];

// function randomExercises(num) {
//     for (let i=0; i < num; i++) {
//         console.log(exerciseArray[Math.floor(Math.random()*exerciseArray.length)]);
//     }
// }

const randomExercises = num => {
    for (let i=0; i < num; i++) {
        console.log(exerciseArray[Math.floor(Math.random()*exerciseArray.length)]);
    }
}

randomExercises(4);