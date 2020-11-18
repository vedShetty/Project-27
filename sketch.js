
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	roof = new Roof(400,100,500,40);

	bob1 = new Bob(275,450);
	bob2 = new Bob(335,450);
	bob3 = new Bob(395,450);
	bob4 = new Bob(455,450);
	bob5 = new Bob(515,450);

	rope1 = new Rope(bob1.body,{x:275,y:100});
	rope2 = new Rope (bob2.body,{x:335,y:100});
	rope3 = new Rope (bob3.body,{x:395,y:100});
	rope4 = new Rope (bob4.body,{x:455,y:100});
	rope5 = new Rope (bob5.body,{x:515,y:100});

}


function draw() {
  rectMode(CENTER);
  background(200);
  roof.display();
  bob1.display();
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
  keyPressed();
  drawSprites();
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
  		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
	}
}