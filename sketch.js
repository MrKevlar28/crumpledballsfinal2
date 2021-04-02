var paper, ground, dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
//var gameState = "onSling";
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2, 650, width, 10 );

	paper = new Paper(180, 350, 17);

	dustBin1 = new Dustbin(570, 644, 90, 20);
	dustBin2 = new Dustbin(615, 617, 20, 75);
	dustBin3 = new Dustbin(525, 617, 20, 75);
  
  slingshot = new Slingshot(paper.body,{x : 180, y : 200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display();
  paper.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  slingshot.display();
  //console.log(paper.x);
  drawSprites();
 
}

// function keyPressed(){
// 	if(keyCode === UP_ARROW) {
//        Matter.Body.applyForce(paper.body, paper.body.position, {x:30,y:-55});
// 	}

// }
function mouseDragged(){
 // if (gameState!=="launched"){
      Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  //gameState = "launched";
}



