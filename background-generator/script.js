var h3 = document.getElementsByTagName('h3')[0];
var body = document.getElementsByTagName('body')[0];
var input1 = document.querySelector('.input-1');
var input2 = document.querySelector('.input-2');

function setGradient(){
	body.style.background = "linear-gradient(to right," + input1.value + "," + input2.value + ")";
	h3.textContent = "background: " + body.style.background + ";";
}


input1.addEventListener('input', setGradient);

input2.addEventListener('input',setGradient);