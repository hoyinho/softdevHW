//Ho Yin Ho 
//SoftDev2 pd2 
//HW2 -- Circular
//2016-02-22


var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var button = document.getElementById("start");
var stop = document.getElementById("stop");
var increase = true;
var draw = true;
var radius = 0;
var drawCircles = function drawCircles(event){
    if (draw){
	context.clearRect(0,0,500,500);
    }
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
    if (increase){
	radius += 5 ;
    }
    else{
	radius -= 5;
    }
    if (draw){
	window.requestAnimationFrame(drawCircles);
    }
}

button.addEventListener("click",function(e){
    draw = true;
    drawCircles();
});
stop.addEventListener("click",function(e){
    draw = false;
});
