var pic = document.getElementById("vimage");
var requestID;

var startCircle = function startCircle(event){
    pic.removeChild(pic.lastChild);
    cancelAnimationFrame(requestID);
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute( "cx",250);
    c.setAttribute( "cy", 250);
    var radius = 0;
    var increase = true;
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
	requestID = window.requestAnimationFrame(drawCircle);
    }
    pic.appendChild(c);
    drawCircle();
}

var startDVD = function startDVD(event){
    window.cancelAnimationFrame(requestID);
    pic.removeChild(pic.lastChild);
    var dvdX = 250;
    var dvdY = 250;
    var dvd = document.createElementNS("http://www.w3.org/2000/svg", "image");
    dvd.setAttributeNS("http://www.w3.org/1999/xlink", "href" , "logo_dvd.jpg");
    dvd.setAttribute("height",50);
    dvd.setAttribute("width", 50);
    dvd.setAttribute("x", dvdX);
    dvd.setAttribute("y", dvdY);
    var xVel = Math.random() * 0.5 + 0.5;
    var yVel = Math.random() * 0.5 + 0.5;
    var drawDVD = function drawDVD(){
	dvdX += xVel;
	dvdY += yVel;
	dvd.setAttribute("x",dvdX);
	dvd.setAttribute("y",dvdY);
	if (dvdX >= 440 || dvdX <=10){
	    xVel *= -1;
	}
	if (dvdY >= 440 || dvdY <= 10){
	    yVel *= -1;
	}
	requestID = window.requestAnimationFrame(drawDVD);
    }
    pic.appendChild(dvd);
    drawDVD();
}
    


var dot = document.getElementById("dot");
dot.addEventListener("click", startCircle);

var dvd = document.getElementById("dvd");
dvd.addEventListener("click", startDVD);

var stop = document.getElementById("stop");
stop.addEventListener("click", function(e){
    cancelAnimationFrame(requestID);
});
