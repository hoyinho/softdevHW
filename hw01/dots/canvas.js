//Ho Yin Ho
//SoftDev2 pd6
//HW2 -- Connect The Dots
//2016-02-11

var canvas = document.getElementById("playground");
var context = canvas.getContext("2d");
context.fillStyle = "red";
var x=-1;
var y=-1;

var button = document.getElementById("clear");

var drawCircles = function drawCircles(event){
    console.log(event.offsetX + " " + event.offsetY);
    if( x != -1){
	context.beginPath();
	context.moveTo(x,y);
	context.lineTo(event.offsetX,event.offsetY);
	context.closePath();
	context.stroke();
	context.beginPath();
	context.arc(x,y,10,0,7);
	context.fill();
    }
    context.beginPath();
    context.arc(event.offsetX , event.offsetY, 10, 0,7);
    context.closePath();
    context.fill();

    x = event.offsetX;
    y = event.offsetY;
};

var clearCanvas = function clearCanvas(event){
    event.preventDefault();
    context.clearRect(0,0,600,600);
    x = -1;
}

canvas.addEventListener("click",drawCircles);
button.addEventListener("click",clearCanvas);
