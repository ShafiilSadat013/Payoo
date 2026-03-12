console.log("Machine Added")

function getValFromInp(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}

function getBalance(){
    const balanceAmnt =  document.getElementById('balance');
    const balance = balanceAmnt.innerText;
    console.log("Current Balance",Number(balance))
    return Number(balance);
}

function setBalance(value){
    const balanceAmnt = document.getElementById("balance");
    balanceAmnt.innerText = value;
}

function show(id){
    const moneyAdd = document.getElementById('addMoney');
    const cashOut = document.getElementById('cashout');
    const history = document.getElementById('history');
    console.log(`add money - ${moneyAdd} CashOut- ${cashOut}`);

    moneyAdd.classList.add("hidden");
    cashOut.classList.add("hidden");
    history.classList.add("hidden");

    const selected =  document.getElementById(id);
    selected.classList.remove("hidden");
}