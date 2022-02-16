/*
3. E-Commerce Item list
    * Use the requiremets below to create a function that takes in an item and prints the price to the console.
    * Use a swtich statement to print the price of the each item in the store to the console.
    * Ex. `itemList('shoes')` should print `Shoes are $50` to the console

    Items: 
     * Shoes- $50
     * Jeans- $25
     * Hat- $12
     * Socks- $2
     * If the function input is not an item in the store, then print 'Invalid Item' to the console.
*/

function itemList(item) {
    item = item.toLowerCase();
    switch (item) {
        case 'shoes':
            console.log('Shoes are $50');
            break;
        case 'jeans':
            console.log('Jeans are $25');
            break;
        case 'hat':
            console.log('Hats are $12');
            break;
        case 'socks':
            console.log('Socks are $2');
            break;
        default:
            console.log('Invalid Item');
    }
}

itemList('purse');