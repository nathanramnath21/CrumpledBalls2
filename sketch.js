
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperObject, wall, ceiling, basket1, basket2, basket3, dustbin;

function preload(){
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	basket1 = new Basket(700,680,200,20)
	basket2 = new Basket(590,640,20,100)
	basket3 = new Basket(810,640,20,100)
	wall = new Ground(1000,320,10,1000)
	ceiling = new Ground(350,0,14000,10)
	paperObject = new Paper(100,690,70)
	ground = new Ground(500,height,1000,20)
	//var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  
  
  if (keyCode === UP_ARROW) {
	   
	keyPressed();

  }
  basket1.display();
  basket2.display();
  basket3.display();
  ceiling.display();
  wall.display();
  ground.display();
  paperObject.display(); 
}

function keyPressed() {
	   
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:5,y:-10});
}

