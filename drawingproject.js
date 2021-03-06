
  var canvasDiv = document.getElementById("drawingArea");
  var canvas = canvasDiv.getContext('2d');

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
 //half circle ,top part of island
 canvas.beginPath();
 canvas.fillStyle = "Khaki";
 canvas.arc(960,470,260,35,20,true);
 canvas.stroke();
 canvas.fill();
 //base of the island
 canvas.fillStyle = "Khaki";
 canvas.fillRect(700, 400, 900, 170);

//tree on island
canvas.fillStyle = "BurlyWood";
canvas.fillRect(950, 50, 15, 200);

//leaves on palm tree
canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(950,50);
canvas.lineTo(950,80);
canvas.lineTo(800,100);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(965,50);
canvas.lineTo(965,80);
canvas.lineTo(1100,100);
canvas.fill();

//coconuts on palm tree
canvas.beginPath();
canvas.fillStyle = "SaddleBrown";
canvas.arc(945, 90, 10, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "SaddleBrown";
canvas.arc(960, 90, 10, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "SaddleBrown";
canvas.arc(800, 250, 10, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "SaddleBrown";
canvas.arc(1120, 250, 10, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "SaddleBrown";
canvas.arc(950, 250, 10, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

//cannon holes on the ship
canvas.fillStyle = "red";
canvas.fillRect(225, 325, 15, 15);

canvas.fillStyle = "red";
canvas.fillRect(300, 325, 15, 15);

canvas.fillStyle = "red";
canvas.fillRect(375, 325, 15, 15);
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
