const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult=document.querySelector("#resultado");
const form=document.querySelector("form");

//btn.addEventListener('click',btnOnClick);
form.addEventListener('submit',btnOnClick);

function btnOnClick(event){
    //console.log('Escuchando el evento del click');
    //console.log(input1.value+input2.value);
    event.preventDefault();
    const sumaInputs= input1.value+input2.value;
    pResult.innerHTML="Resultado: "+sumaInputs;
}