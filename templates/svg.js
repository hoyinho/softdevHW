var pic = document.getElementById("vimage");
var requestID;

var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c.setAttribute( "cx",250);
c.setAttribute( "cy", 250);
var radius = 0;
var increase = true;


var startCircle = function startCircle(event){
    cancelAnimationFrame(requestID);
    var drawCircle = function drawCircle(){
	if (radius ==240){
	    increase = false;
	}
	if (radius == 0){
	    increase = true;
	}
	c.setAttribute( "r",radius);
	c.setAttribute( "fill","red");
	c.setAttribute( "stroke", "black");
	if (increase){
	    radius += 1;
	}
	else {
	    radius -=1;
	}
	pic.appendChild(c);
	requestID = window.requestAnimationFrame(drawCircle);
    }
    drawCircle();
}

var dot = document.getElementById("dot");
dot.addEventListener("click", startCircle);
    

