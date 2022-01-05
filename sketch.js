//NAMESPACING - giving nicknames
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
let world;
var ground;
var left_wall, right_wall, top_wall, ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create(); //creating a copy of Matter.Engine that we can manipulate
  world = engine.world;
  
  ground = new Ground(200, 390, 400, 20);

  left_wall = new Ground(10,200,20,400)
  right_wall = new Ground(390,200,20,400)
  top_wall = new Ground(200,10,400,20)
  var option_ball = {
    restitution: 0.9
  }
  ball = Bodies.circle(200,100,20,option_ball);
  World.add(world,ball);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display();
  left_wall.display();
  right_wall.display();
  top_wall.display();
  fill ("maroon")
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,20,20)
}

/*
PHYSICS ENGINE
library that follows real world physics - MATTER.js

1. Universe - ENGINE (Matter.Engine)
2. World - Matter.World
3. Bodies - Matter.Bodies





OBJECT ORIENTED PROGRAMMING
  Objects
    1. Properties
    2. Functions

  Steps to create an objects
    1. Design of the object - CLASS
    2. Creating the object - Properties are assigned 
    3. Using functions if & when required

*/
