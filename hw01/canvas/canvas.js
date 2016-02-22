//Ho Yin Ho 
//SoftDev2 pd2 
//HW1 -- Canvas
//2016-02=10


var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");


ctx.fillStyle="blue";
ctx.lineWidth="20";
ctx.beginPath();
ctx.moveTo(269,269); //moving the starting point
ctx.arc(269,269,200,0,7); //xcor for center, ycor for center, radius, start angle, end angle in radians.
//goes counter-clockwise

ctx.closePath();
ctx.stroke();  //need stroke lines to see the lines
ctx.fill();  //fills in only a closed shape. only the inside of the lines. does not include the edges

ctx.beginPath();
ctx.arc(269,269,130,Math.PI/6,5*Math.PI/6);
ctx.moveTo(149,209);
ctx.lineTo(239,209); // draws from starting point to specified x,y
ctx.moveTo(299,209);
ctx.lineTo(389,209);
ctx.closePath();//resets starting point and acts like a close file function
ctx.stroke();

ctx.fillStyle="red"
ctx.font="30px arial"
ctx.fillText("Smiley",224,100); //puts text in canvas starting at specified x,y

