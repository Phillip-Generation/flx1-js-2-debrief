const exercise = ['Push-ups', 'Sit-ups', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];

function getRandomExercise(n) {
    for (let i = 0; i < n; i++) {
        console.log(exercise[Math.floor((Math.random() * exercise.length))]);

    }
}
getRandomExercise(4);


//I found this solution and it stops generarting duplicate exercises 
// result = exercise.slice(0, 4).map(function() {
//     return this.splice(Math.floor(Math.random() * this.length), 1)[0];
// }, exercise.slice());

// console.log(result);