const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML="Patito <br> feo";
console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo');

h1.classList.add('amarillo');
h1.classList.remove('rojo');

input.value="456";

const img=document.createElement('img');
img.setAttribute('src','https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg');
pid.innerHTML="";
pid.appendChild(img);