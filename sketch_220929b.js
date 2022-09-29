
var x;
var y;
var p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x=width;
  y=height;
  p=1;
}

function draw() {
    background(30); 
  stroke(200);
  noFill(); 
 
  ellipse(x,y,10,10);
  x-=1;
  y=random(height/2-p,height/2+p);
  
  if(x<0){
    noLoop();
    print("There is no eternal memory...");
  }
}
