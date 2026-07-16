const totalAmount = 7700;
if(totalAmount > 5000){
    const discount = 30;
    const discountAmount =totalAmount / 100* discount;
    const payment = totalAmount - discountAmount;
    console.log(payment);
}
else if (totalAmount >1000){
    const discount = 10;
    const discountAmount = totalAmount/100*discount
    const payable = totalAmount - discountAmount;
    console.log(payable)
}