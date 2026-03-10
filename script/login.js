console.log('meow');

document.getElementById("login-btn").addEventListener("click",function(){

    //  console.log('login button clicked')

    //get number
    const numInput = document.getElementById("input-number");
    const contact = numInput.value;
    console.log(contact)
    
    //get pin
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    console.log(pin);

    if(contact == "01234567890" && pin == "1234"){

        alert("Login Success")
        window.location.assign("home.html")
    }
    else{
        alert("Login Failed");
        return;
    }

})