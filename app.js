// JS 2 Debrief
const excercises = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', 
'60 second plank', 'Burpees, Jumping Jacks', 'Squats', 'Weighted Squats', 
'Inch Worms'];

//Select a specified number of excercise
/*function selectExcercises(numberOfExcercises){
  
  for (let i = 0; i <= numberOfExcercises; i++) {
    let r = Math.floor(Math.random() * excercises.length);
    console.log(excercises[r]);
  }
  
}
selectExcercises(4);
*/

const selectExcercises2 = (n) => { 
  n = parseInt(n);
  
  for (let i = 0; i <= n; i++) { let r = Math.floor(Math.random() * excercises.length);
    console.log(excercises[r]); 
  }
};

selectExcercises2(prompt('How many excercises to choose?'));

// Part 2 GenBuzz Log Gen if 1-15, Buzz if upperLimit mod 3 true, and Gen Buzz if both mod 3 and mod 5 true
const genBuzz = (upperLimit) => {  upperLimit = parseInt(upperLimit); 
  if (typeof upperLimit !== 'number') {  console.log('This is not a number');
  } else if (upperLimit <= 15) { console.log('Gen'); 
}else if (upperLimit % 3 === 0) { let modThree = true;
  console.log('Buzz');
}else if (modThree === true && upperLimit % 5 === 0) { console.log('GenBuzz');
}else console.log(upperLimit);}

genBuzz(prompt('Enter a Number between 1-15'));

// Part 3 E-Commerce
// Inventory Checker takes inventory Item input
const inventoryItemChecker = inventoryItem => { switch (inventoryItem) {
  case 'Shoes': console.log('Shoes are $50');    break;
  case 'Jeans': console.log('Jeans are $25');    break;
  case 'Hats':  console.log('Hats are $12');    break;
  case 'Socks': console.log('Socks are $2');    break;
  default: console.log(`Invalid item: ${inventoryItem}.`);}
}

inventoryItemChecker(prompt('Shoes, Socks, Hats, Jeans (Case Sensitive)'));