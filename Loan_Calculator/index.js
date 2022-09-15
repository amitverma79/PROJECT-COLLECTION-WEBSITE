function calculateloan() {
    var amount = document.getElementById('loan_ammount').value;


    var Interest_Rate = document.getElementById('Interest_Rate').value;

    var Months_To_Pay = document.getElementById('Months_To_Pay').value;

    var interest = (amount * (Interest_Rate) * .01) / Months_To_Pay;;
    var payment = ((amount / Months_To_Pay) + interest).toFixed(2);
    payment = payment.toString();
    document.getElementById('payment').innerHTML = "monthly payment : " + payment;

}