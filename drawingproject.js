
  var canvasDiv = document.getElementById("drawingArea");
  var canvas = canvasDiv.getContext('2d');
//the sea
  canvas.fillStyle = "blue";
  canvas.fillRect(200, 300, 2000000056, 2000);
  canvas.fillRect(10, 300, 2000000056, 2000);
  canvas.fillRect(2000000000, 300, 2000000056, 54545);

//the sky
var grd = canvas.createRadialGradient(75,50,50,90,100,900);
grd.addColorStop(0,"aqua");
grd.addColorStop(1,"white");

canvas.fillStyle = grd;
canvas.fillRect(10, 10, 1000, 290);

//part of the ship a rectange
canvas.fillStyle = "brown";
canvas.fillRect(140, 275, 350, 30);

//the sun
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(100, 75, 50, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
//half circle ,part of the ship
canvas.beginPath();
canvas.fillStyle = "brown";
canvas.arc(315,300,130,3.1,0,true);
canvas.stroke();
canvas.fill();
//pole on ship
canvas.fillStyle = "black";
canvas.fillRect(200, 50, 15, 245);
//flag on ship
 canvas.beginPath();
 canvas.fillStyle = "white";
 canvas.moveTo(200,50);
 canvas.lineTo(80,60);
 canvas.lineTo(200,100);
 canvas.fill();

//trapazoid
//canvas.fillStyle = '#f00';
//canvas.beginPath();
//canvas.moveTo(0, 0);
//canvas.lineTo(100,50);
//canvas.lineTo(50, 100);
//canvas.lineTo(0, 90);
//canvas.closePath();
//canvas.fill();

//canonn
canvas.fillStyle = "black";
canvas.beginPath();
canvas.rotate(-10*Math.PI/180);
canvas.fillRect(390,345,100,20);
canvas.fill();

//canonn ball
canvas.beginPath();
canvas.fillStyle = "gray";
canvas.arc(650, 350, 10, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
