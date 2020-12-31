function distance(){
	let theForm = document.forms["distance-form"];
	let x1 = theForm.elements[0].value;
	let y1 = theForm.elements[1].value;
	let x2 = theForm.elements[2].value;
	let y2 = theForm.elements[3].value;
	let dist = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
	document.getElementById('ans').innerHTML = "Answer: " + dist;
}
