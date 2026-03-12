
document.getElementById("addM-btn").addEventListener('click',function(){

  //console.log('add money button clicked')
  //get account
  const bankAcnt = getValFromInp('addMBank');
  //console.log(bankAcnt);
  if(bankAcnt == "Select Bank"){
    alert('Please Select A Bank');
    return;
  }
  
  //get acc Number
  const accountNum = getValFromInp("addM-number");
  if(accountNum.length != 11){
    alert('Enter A Valid Account Number');
    return;
  }
  // adding the amount to the balance
  const amount = getValFromInp("addM-amount");
  const newBalance = getBalance() + Number(amount);
  //console.log(newBalance);
  const pin = getValFromInp('addM-pin');
  if(pin === '1234'){
    alert(`Add Money Success from ${bankAcnt} 
        at ${new Date()}`);
    setBalance(newBalance);

    const history = document.getElementById('history-container');
    const newHistorty = document.createElement("div");
    newHistorty.innerHTML = 
    `
    <div class="transaction-card p-5 bg-base-100">
    Add Money Success from ${bankAcnt} at ${new Date()}, acc-no ${accountNum}

    </div>

    `;
    history.append(newHistorty);
  }



  else{
    alert('Invalid Pin !!');
    return;
  }

})