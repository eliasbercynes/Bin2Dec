var bineryInput = document.querySelector('input');

var event = document.addEventListener('keyup', myFun);

var output = document.getElementById('output');



function myFun(){
    // console.log(parseInt(binaryInput.value));
    
    var ar = bineryInput.value.split('');
    var increse = 1;
    var sum = 0;
    
    for (i = (ar.length - 1); i >= 0; i--){
    // console.log(`ar[${i}] * ${increse} = ${ar[i] * increse}`)
    sum += ar[i] * increse;
    increse *= 2
 
    } 
     // change the output
    output.innerText = sum;

    // reseting the sum
    sum = 0;
   
 }
