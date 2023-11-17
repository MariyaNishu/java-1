// addition
let number1, number2;
number1 = 5;
number2 = 5;

number1 += number2;
 
 function dataAddition(){
 	document.getElementById('sum').innerHTML=number1;
 }
// class name
function cName(){
	document.getElementByClassName('h2')[2].innerHTML="hello world";
}
//show/hide
function textHide(){
	document.getElementById('sh').style.display="none";
}
function textShow(){
	document.getElementById('sh').style.display="block";
}
// change color
function colorChange(){
	document.getElementById('cc').style.color="red";
}
// on/off
function bulbOn(){
	document.getElementById('img').src="imges/on.gif";
}
function bulbOff(){
	document.getElementById('img').src="imges/off.gif";
}
 // text change
function textChange(){
	document.getElementById('tc').innerHTML="Hello world";
}  
 // show date
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}