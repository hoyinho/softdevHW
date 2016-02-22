var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var button = document.getElementById("start");
var increase = true;
var radius = 0;
var drawCircles = function drawCircles(event){
    console.log("here");
    context.clearRect(0,0,500,500);
    if (radius == 240){
	increase = false;
    }
    if (radius == 0){
	increase = true;
    }
    context.beginPath();
    context.fillStyle = "red";
    console.log(radius);
    context.arc(250,250,radius, 0, 2 * Math.pi);
    context.closePath();
    context.fill();
    if (increase){
	radius += 10;
    }
    else{
	radius -= 10;
    }
    window.requestAnimationFrame(drawCircles);
}

button.addEventListener("click",drawCircles);
