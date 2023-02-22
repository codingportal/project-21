var ball
var wall_1
var wall_2
var wall_3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	wall_1=createSprite(10,100,700,500)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 Bodies= Bodies.create()

	Engine.run(engine);
  ball_options={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2
	Worldadd(ball)
  }
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



