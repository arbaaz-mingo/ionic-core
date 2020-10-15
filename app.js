const reasonInput = document.querySelector('#expense-reason');
const amountInput = document.querySelector('#expense-amount');
const clearButton = document.querySelector('#clear-button');
const addExpenseButton = document.querySelector('#add-expense-button');
const ExpensesList = document.querySelector('#expenses-list');
const TotalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.createElement('ion-alert-controller');

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
            //alert('Invalid Values!');
            const alert = document.createElement('ion-alert');
            alert.header = 'Invalid inputs';
            alert.message = 'Please enter a valid reason and amount!';
            alert.buttons = ['Okay'];
            document.body.appendChild(alert);
            return alert.present();    
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