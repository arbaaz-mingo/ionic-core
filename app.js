const reasonInput = document.querySelector('#expense-reason');
const amountInput = document.querySelector('#expense-amount');
const clearButton = document.querySelector('#clear-button');
const addExpenseButton = document.querySelector('#add-expense-button');
const ExpensesList = document.querySelector('#expenses-list');
const TotalExpensesOutput = document.querySelector('#total-expenses');

let TotalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

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
        //console.log(enteredReason, enteredAmount);
        const newItem = document.createElement('ion-item');
        newItem.textContent = enteredReason + ': Rs.' + enteredAmount;

        ExpensesList.appendChild(newItem);
        
        TotalExpenses += +enteredAmount;
        TotalExpensesOutput.textContent = TotalExpenses;

        clear();
});

clearButton.addEventListener('click', clear);