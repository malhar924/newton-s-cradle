const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;

	//Create the Bodies Here.
	roof = new Roof(300, 100, 300, 20);

	bob1 = new Bob(200, 400, 50);
	bob2 = new Bob(250, 400, 50);
	bob3 = new Bob(300, 400, 50);
	bob4 = new Bob(350, 400, 50);
	bob5 = new Bob(400, 400, 50);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2.4,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1.3,0);
	rope3 = new Rope(bob3.body,roof.body,0,0); 
 	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1.3,0); 
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2.4,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof.display();
  
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); } 
} 