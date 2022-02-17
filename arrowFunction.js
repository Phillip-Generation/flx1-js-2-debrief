//Random Exercise using Arrow functions
const arr1 = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];
const randomExercise = (arr1) =>{
    for(let i=0; i<arr1.length; i++){
        return arr1[Math.floor(Math.random()*arr1.length)];
}
}
console.log(randomExercise(arr1));