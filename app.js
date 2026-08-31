let bill = document.getElementById('bill');
let tip = document.getElementById('tip');
let totalTip = document.getElementById('total');
let calculate = document.getElementById('calculate');

function calculateTip(){
   let billAmount = bill.value;
   let tipAmount = tip.value;
let totalValue = billAmount * (1 + tipAmount / 100);
total.innerText = totalValue.toFixed(2)
}

calculate.addEventListener('click' , calculateTip);