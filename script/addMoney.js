
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
  }
  else{
    alert('Invalid Pin !!');
    return;
  }

})