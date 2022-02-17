const exercises = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];

const exercisesList = num => {
    let exercisesList = exercises.length;
    for (let i = 0; i < num; i++) {
        let randomNumber = Math.floor(Math.random() * exercisesList);
        console.log(exercises[randomNumber]);
    }
}
exercisesList(3);