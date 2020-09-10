
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var tree;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 tree= new Tree(650,650,50,90);
 Engine.run(engine);
 
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  tree.display();
  drawSprites();
 
}



