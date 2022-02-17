//e-Commerce item list

function itemPriceChecker(itemList){
    switch(itemList){
     case "shoes":
         console.log("shoes are 50$");
         break;
    case "jeans":
        console.log("jeans are 25$");
        break;
    case "hats":
        console.log("hats are 12$");
        break;
    case "socks":
        console.log("socks are 2$");
        break;
    default:
        console.log("invalid item");
 }
}

console.log(itemPriceChecker('shoes'));
