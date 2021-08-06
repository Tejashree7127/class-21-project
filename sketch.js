const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var grd;
var left;
var right;
var top_wall;
var ball
var bt1,bt2

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
 
  


 grd =new Ground(400,680,800,20)
 left= new Ground(500,670,20,200);
 right= new Ground(780,670,20,200);
 //top_wall=new Ground(200,10,400,20);


 ball=Bodies.circle(200,10,20)
  World.add(world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("grey");
  
  Engine.update(engine);
  grd.show();
  left.show()
  right.show()
 // top_wall.show()

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)


}

function keyPressed(){
  if(keyCode==32)
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
}

