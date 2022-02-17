//RANDOM EXERCISE GENERATOR

const getExercise = n => {
  let exerciseArray = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 Mile Run', '60 Second Plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];
  for (let counter = 0; counter < n; counter++) {
    console.log(exerciseArray[Math.floor(Math.random() * exerciseArray.length)]); 
  }
};
getExercise(4);

//GENBUZZ

function genBuzz(upperLimit) {
  if (typeof upperLimit !== 'number') {
    console.log('Please enter a number.');
  }
  for (let i = 1; i <= upperLimit; i++){
    if  (i % 15 === 0) {
      console.log('GenBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Gen');
    } else {
      console.log(i);
    }
  }
}
genBuzz(15);

//E-COMMERCE ITEM LIST

function priceFinder(item) {
  item = item.toLowerCase();
  switch (item) {
    case 'shoes':
      console.log('Shoes are $50.');
      break;
    case 'jeans':
      console.log('Jeans are $25.');
      break;
    case 'hat':
      console.log('Hats are $12.');
      break;
    case 'socks':
      console.log('Socks are $2.');
      break;
    default:
      console.log('Invalid Item');
  }
}
priceFinder('shOes');