function itemList(thing){
let item = thing.toLowerCase();
let price;
switch(item){
    case 'shoes':
         price = 50;
         break;
    case 'jeans':
        price = 25;
        break;
    case 'hat':
        price = 12;
        break;
    case 'socks':
        price = 2;
        break;
    default: 
       return 'item undefined';
}

console.log(item + ' price is '+ price)
}

itemList('Hat');