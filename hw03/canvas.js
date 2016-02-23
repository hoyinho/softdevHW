//Ho Yin Ho 
//SoftDev2 pd2 
//HW2 -- Circular
//2016-02-22


var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var button = document.getElementById("start");
var stop = document.getElementById("stop");
var dvd = document.getElementById("dvd");

var increase = true;
var requestID;


var logo = new Image();
logo.src = "dvd.jpg";

var dvdX = 250;
var dvdY = 250;
var xVel = Math.sqrt(3)/2;
var yVel = 1/2;

var radius = 0;
var drawCircles = function drawCircles(event){
    context.clearRect(0,0,500,500);
    console.log("here");
    if (radius == 240){
	increase = false;
    }
    if (radius == 0){
	increase = true;
    }
    context.beginPath();
    context.fillStyle = "red";
    console.log(radius);
    context.arc(250,250,radius, 0, 7)
    context.closePath();
    context.fill();
    context.fillText(radius,0,10);
    if (increase){
	radius += 1 ;
    }
    else{
	radius -= 1;
    }
    requestID = window.requestAnimationFrame(drawCircles);
}

var drawDVD = function drawDVD(event){
    context.clearRect(0,0,500,500);
    context.drawImage(logo,dvdX,dvdY,50,50);
    dvdX += xVel;
    dvdY += yVel;
    if (dvdX >= 440){
	xVel *= -1;
    }
    if (dvdY >= 440){
	yVel *= -1;
    }
    if (dvdX <= 10){
	xVel *= -1;
    }
    if (dvdY <= 10){
	yVel *= -1;
    }
    requestID = window.requestAnimationFrame(drawDVD);
}    
	
	
    



button.addEventListener("click", drawCircles);
dvd.addEventListener("click", drawDVD);
stop.addEventListener("click",function(e){
    cancelAnimationFrame(requestID);
});
