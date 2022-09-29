var points=[]
var mult;

function setup()
{
  createCanvas(windowWidth,windowHeight);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);
  
  var density =42;
  var space=width/density;
  
  for(var x=0;x<width;x+=space){
    for(var y=0;y<height;y+=space)
      {
        var p=createVector(x,y);
        points.push(p);
      }
  }
  shuffle(points,true);
  mult=random(0.002,0.01);
}
function draw()
{
  noStroke();
 if(frameCount<=points.length)
   {
     var max=frameCount;
   }
  else
    {
      var max=points.length;
    }
  for(var i=0;i<max;i++)
    {
      var r=map(points[i].x,0,width,50,100);
      var g=map(points[i].y,0,height,50,100);
      var b=map(points[i].x,0,width,100,50);
      var alpha=110;
       fill(r,g,b,alpha);
      var angle=map(noise(points[i].x*mult,points[i].y*mult),0,3,0,720);
      points[i].add(createVector(cos(angle),sin(angle)));
      ellipse(points[i].x,points[i].y,1);
    }
}
