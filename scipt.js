const calculate = document.querySelector('.calculate');


const reset = document.querySelector('.reset');



const billPrice = document.getElementById('bill-price');
const discountAmount = document.getElementById('discount-amount');
const discountPrice = document.getElementById('discount-price');

calculate.addEventListener('click', billCalculation);

function billCalculation() {

  const totalDiscount = (billPrice.value * discountAmount.value) / 100; 
  const finalPrice = billPrice.value - totalDiscount; 

  discountPrice.value = finalPrice; 
}

reset.addEventListener('click', resetButton);

function resetButton(){
   billPrice.value = '';
   discountAmount.value = '';
   discountPrice.value = '';


}