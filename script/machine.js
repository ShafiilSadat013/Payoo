console.log("Machine Added")

function getValFromInp(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}