function getPin() {
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 degit and calling again',pin)
        return getPin()
    }
}
function generatePin() {
    const pin2 = getPin();
    document.getElementById('display-pin').value = pin2
    // console.log(pin);
}

document.getElementById("key-pad").addEventListener('click', function(event){
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
        // console.log(number);
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else {
        
    const previousNumber = calcInput.value;
    const newNumbers = previousNumber + number;
    calcInput.value = newNumbers;
    }
});

function verefyPin() {
   const pin = document.getElementById('display-pin').value;
   const typedNumers = document.getElementById('typed-numbers').value;
   const successMessage = document.getElementById('notefy-success');
   const failError = document.getElementById('notefy-fail');
   if(pin == typedNumers){
       
       successMessage.style.display = 'block';
       failError.style.display = 'none';
   }
   else{
    
    failError.style.display = 'block';
    successMessage.style.display = 'none';
   }
}