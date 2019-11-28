let stpbl1 = document.getElementById("stepbl1");
let stpblrd1 = document.getElementById("stepbrdr1");

stepbl1.onmouseover = function() {
	stpblrd1.style.borderBottom = "3px solid white";	
}
stepbl1.onmouseout = function() {
	stpblrd1.style.borderBottom = "3px solid black";	
}