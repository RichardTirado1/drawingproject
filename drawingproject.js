
  var canvasDiv = document.getElementById("drawingArea");
  var canvas = canvasDiv.getContext('2d');
//the sea
  canvas.fillStyle = "blue";
  canvas.fillRect(200, 300, 2000000056, 2000);
  canvas.fillRect(10, 300, 2000000056, 2000);
  canvas.fillRect(2000000000, 300, 2000000056, 54545);
//part of the ship a rectanglw
canvas.fillStyle = "brown";
canvas.fillRect(140, 275, 500, 50);

//the sun
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(100, 75, 50, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
//half circle ,part of the ship
canvas.beginPath();
canvas.fillStyle = "brown";
canvas.arc(390,315,200,3.1,0,true);
canvas.stroke();
canvas.fill();
//triangles on the sun
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(75,50);
canvas.lineTo(100,75);
canvas.lineTo(100,25);
canvas.fill();
