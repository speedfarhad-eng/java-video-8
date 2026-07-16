/**
 * binary -----> two
 * ternary -----> three
*/
// 
let price = 500;
const isLeader = true;
// if(isLeader){

//     price =0;
// }
// else{
//    price = price + 100; 
// }
// console.log('price is : ', price)
price = isLeader ? 0 : price +100;
console.log('price now:', price);