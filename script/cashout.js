// console.log('testinggggggg')

document.getElementById("cashout-btn").addEventListener('click',function(){

    //get agent no
    const cashoutNInput =  document.getElementById("cashout-number");
    const cashoutN = cashoutNInput.value;
    console.log(cashoutN)

    if(cashoutN.length !=11){
        alert('Invalid Agent Number');
        return;
    }

    //get amount
    const cashoutAInput =  document.getElementById("cashout-amount");
    const cashoutAmnt = cashoutAInput.value;
    console.log(cashoutAmnt);

    //get current balance
    const balanceAmnt =  document.getElementById("balance");
    const balance = balanceAmnt.innerText;
    //console.log(balance)
    const newBalance = Number(balance) - Number(cashoutAmnt);
    //console.log(newBalance);
    if(newBalance<0){
        alert("Not Enough Balance");
        return;
    }

    //get the pin
    const cashoutPinInp = document.getElementById("cashout-pin");
    const pin = cashoutPinInp.value;
    if(pin==='1234'){
        alert("Cashout Successful");
        console.log('New BALANCE IS:',newBalance);
        balanceAmnt.innerText = newBalance;

    }
    else{
        alert("Invalid Pin");
        return;
    }

})