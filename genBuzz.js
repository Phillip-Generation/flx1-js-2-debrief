function genBuzz(upperLimit){

    if (typeof upperLimit === 'number') {

        for (let i = 1; i <= upperLimit; i++) {

            if (i % 15 == 0) {
                console.log(i + "GenBuzz");
            } else if (i % 3 == 0) {
                console.log(i + ' Buzz');
            } else if (i % 5 == 0) {
                console.log(i + ' Gen');
            } else {
                console.log(i);
            }
        }
    }
}

genBuzz(15);