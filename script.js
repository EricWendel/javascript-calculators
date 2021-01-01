function distance(){
	let theForm = document.forms["distance-form"];
	let x1 = theForm.elements[0].value;
	let y1 = theForm.elements[1].value;
	let x2 = theForm.elements[2].value;
	let y2 = theForm.elements[3].value;
	let dist = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
	document.getElementById('ans').innerHTML = "Answer: " + dist;
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
