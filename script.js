function distance(){
	let theForm = document.forms["distance-form"];
	let x1 = theForm.elements[0].value;
	let y1 = theForm.elements[1].value;
	let x2 = theForm.elements[2].value;
	let y2 = theForm.elements[3].value;

	if(x1 == 0){
		document.getElementById('x1').value = 0;  // Set empty input to 0
	}
	else{
		document.getElementById('x1').value = x1.replace(/^0+/, '');  // Trim leading zeros
	}
	if(x2 == 0){
		document.getElementById('x2').value = 0;
	}
	else{
		document.getElementById('x2').value = x2.replace(/^0+/, '');
	}
	if(y1 == 0){
		document.getElementById('y1').value = 0;
	}
	else{
		document.getElementById('y1').value = y1.replace(/^0+/, '');
	}
	if(y2 == 0){
		document.getElementById('y2').value = 0;
	}
	else{
		document.getElementById('y2').value = y2.replace(/^0+/, '');
	}

	let dist = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
	document.getElementById('ans').innerHTML = "Answer: " + dist;
}

function makeChange(){
	let theForm = document.forms["change-form"];
	let cents = theForm.elements[0].value;
	let quarters = Math.floor(cents/25);
	cents = cents % 25;
	let dimes = Math.floor(cents/10);
	cents = cents % 10;
	let nickels = Math.floor(cents/5);
	cents = cents % 5;
	let pennies = cents;

	document.getElementById('ans-q').innerHTML = "Quarters: " + quarters;
	document.getElementById('ans-d').innerHTML = "Dimes: " + dimes;
	document.getElementById('ans-n').innerHTML = "Nickels: " + nickels;
	document.getElementById('ans-p').innerHTML = "Pennies: " + pennies;
}

function changeFormSubmitted(){  //  TODO:: Make formSubmitted() work for all potential calculators
	document.getElementById("cents").style.backgroundColor = "PaleGreen";
	document.getElementById('ansbox').style.borderColor = "PaleGreen";
}

function formChanged(id){
	document.getElementById(id).style.backgroundColor = "IndianRed";
	document.getElementById('ansbox').style.borderColor = "IndianRed";
}

function formSubmitted(){
	document.getElementById("x1").style.backgroundColor = "PaleGreen";
	document.getElementById("y1").style.backgroundColor = "PaleGreen";
	document.getElementById("x2").style.backgroundColor = "PaleGreen";
	document.getElementById("y2").style.backgroundColor = "PaleGreen";
	document.getElementById('ansbox').style.borderColor = "PaleGreen";
}
