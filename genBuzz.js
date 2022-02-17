//GenBuzz print the word
function upperLimit(myNumber) {
    if(typeof myNumber !=='number') {
  console.log("this is not a number");
  } else if(myNumber%3==0 && myNumber%5==0){
      console.log("GenBuzz");
  } else if(myNumber%3==0) {
      console.log("gen"); 
  } else if(myNumber%5==0) {
      console.log("buzz");
  } else {
      console.log("not the number");
  }
   }
    console.log(upperLimit(10));