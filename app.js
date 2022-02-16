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

// Part 2 GenBuzz 

let upperLimit = prompt("Please enter a whole number")
upperLimit = parseInt(upperLimit);
  

// Check myNumber is type Number
if (typeof upperLimit !== 'number') {
  console.log('This is not a number');
}
// Check myNumber factor 3
else if (upperLimit % upperLimit === 0) {
  console.log('Gen');
}
// Check myNumber factor 5
else if (upperLimit % 5 === 0) {
  console.log('Buzz');
}
// Check myNumber factors of 3 and 5 
else if (typeof myNumber === 'number' && modThree && modFive) {
  console.log('GenBuzz');

}
// Print myNumber if not either factor 3 or 5 
else
  console.log(myNumber);