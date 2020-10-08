const reasonInput = document.querySelector('#expense-reason');
const amountInput = document.querySelector('#expense-amount');
const clearButton = document.querySelector('#clear-button');
const addExpenseButton = document.querySelector('#add-expense-button');

addExpenseButton.addEventListener('click', ()=> {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(
        enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredAmount.trim().length <=0
        ){
            return;
        }
        console.log(enteredReason, enteredAmount);
});