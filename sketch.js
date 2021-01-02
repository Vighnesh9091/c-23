const Engine=Matter.Engine;
const World=Matter.World;
const Bodies =Matter.Bodies;

var engine,world,object;
var box1;
var ground1;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world=engine.world;

  box1 = new Box(420,100,50,50);
  box2 = new Box(400,100,50,50)
  ground1 = new Ground(10,395,1600,20)
}

function draw() {
  background("black");  
  Engine.update(engine)
  box1.display();
  ground1.display();
  box2.display();
}