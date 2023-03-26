const cardToCardForm = document.querySelector('.card-to-card-form');
const creditForm = document.querySelector('.credit-form');
const lightForm = document.querySelector('.light-form');
const withdrawForm = document.querySelector('.withdraw-form');
const depositForm = document.querySelector('.deposit-form');
const depositInput = document.querySelector('.deposit-input');
const withdrawInput = document.querySelector('.withdraw-input');
const selectAction = document.querySelector('.select-action');
const balanceText = document.querySelector('.balance');
const lightDebtText = document.querySelector('.light-debt');
const creditDebtText = document.querySelector('.credit-debt');
const lightInput = document.querySelector('.light-input');
const creditInput = document.querySelector('.credit-input');
const cardName = document.querySelector('.card-name');
const cardAmount = document.querySelector('.card-amount');

let balance = 42;
let creditDebt = 50;
let lightDebt = 70;

creditDebtText.innerText = `Debt: ${creditDebt}$`
lightDebtText.innerText = `Debt: ${lightDebt}$`
balanceText.innerText = `Balance: ${balance}$`;



creditForm.style.display = "none";
cardToCardForm.style.display = "none";
lightForm.style.display = "none";

selectAction.addEventListener("change", () => {
    if(selectAction.value == "card-to-card"){
        creditForm.style.display = "none";
        cardToCardForm.style.display = "block";
        lightForm.style.display = "none";
    }else if(selectAction.value == "light"){
        creditForm.style.display = "none";
        cardToCardForm.style.display = "none";
        lightForm.style.display = "block";
    }else if(selectAction.value == "credit"){
        creditForm.style.display = "block";
        cardToCardForm.style.display = "none";
        lightForm.style.display = "none";
    }
});


withdrawForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(balance >= parseInt(withdrawInput.value)){
        balance-= parseInt(withdrawInput.value);
    }else{
        alert("Not enough balance")
    }
 
    withdrawForm.reset();
    balanceText.innerText = `Balance: ${balance}$`;
});

depositForm.addEventListener("submit", (e) => {
    e.preventDefault();
    balance+=parseInt(depositInput.value);
    depositForm.reset();
    balanceText.innerText = `Balance: ${balance}$`;
});

creditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(parseInt(creditInput.value) <= balance){
        if(parseInt(creditInput.value) <= creditDebt){
            balance -= parseInt(creditInput.value);
            balanceText.innerText = `Balance: ${balance}$`;
            creditDebt -= parseInt(creditInput.value);
            creditDebtText.innerText = `Debt: ${creditDebt}`;
            creditForm.reset();

        }else{
            alert("Input value is bigger than debt");
            creditForm.reset();
        }
    }else{
        alert("Not enough money in  balance");
        creditForm.reset();
    }
});


lightForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(parseInt(lightInput.value) <= balance){
        if(parseInt(lightInput.value) <= lightDebt){
            balance -= parseInt(lightInput.value);
            balanceText.innerText = `Balance: ${balance}$`;
            lightDebt -= parseInt(lightInput.value);
            lightDebtText.innerText = `Debt: ${lightDebt}`;
            lightForm.reset();

        }else{
            alert("Input value is bigger than debt");
            lightForm.reset();
        }
    }else{
        alert("Not enough money in  balance");
        lightForm.reset();
    }
});

cardToCardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(parseInt(cardAmount.value) <= balance){
        balance -= parseInt(cardAmount.value);
        balanceText.innerText = `Balance: ${balance}$`;
        alert(`Sent ${cardAmount.value}$ to ${cardName.value}`);
        cardToCardForm.reset();
    }else{
        alert("Not enough money");
        cardToCardForm.reset();
    }
})