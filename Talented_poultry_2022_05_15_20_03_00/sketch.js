var count = 0;
function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
}

function draw() {
  background(1, 186, 240);
  var x=width /2 +count ;
  var y=height /2;
  var size = 200 + count
  
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, size *0.75, size *0.15);
  
  fill(255);
  rect(x,y,150, 30);
  
  count = count+1;
}