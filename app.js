// JS 2 Debrief


const excercises = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', 
'60 second plank', 'Burpees, Jumping Jacks', 'Squats', 'Weighted Squats', 
'Inch Worms'];

//Select a specified number of excercise
function selectExcercises(numberOfExcercises){
  
  for (let i = 0; i <= numberOfExcercises; i++) {
    let r = Math.floor(Math.random() * excercises.length);
    console.log(excercises[r]);
  }
  
}
selectExcercises(4);

const selectExcercises2 = (numberOfExcercises) => {
  
  for (let i = 0; i <= numberOfExcercises; i++) {
    let r = Math.floor(Math.random() * excercises.length);
    console.log(excercises[r]);
  }
  
}
selectExcercises2(4);