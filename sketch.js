
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperObject, wall, ceiling, basket1, basket2, basket3, dustbinImage, dustbin;

function preload(){
	
	dustbinImage = loadImage("png's/dustbingreen.png")

}

function setup() {
	createCanvas(1000, 700);
	//ustbin = createSprite(400,100,20,20);
    //dustbin.addImage(dustbinImage);
    //dustbin.scale = 1;

	engine = Engine.create();
	world = engine.world;
	basket1 = new Basket(800,680,150,20)
	basket2 = new Basket(715,600,20,220)
	basket3 = new Basket(885,600,20,220)
	wall = new Ground(1000,320,10,1000)
	ceiling = new Ground(350,0,14000,10)
	paperObject = new Paper(100,690,70)
	ground = new Ground(500,height,1000,20)
	//var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  if (keyCode === DOWN_ARROW) {
	   
	keyPressed();

  }
  basket1.display();
  basket2.display();
  basket3.display();
  ceiling.display();
  wall.display();
  ground.display();
  paperObject.display(); 
  image(dustbinImage,700,490,200,200);
}

function keyPressed() {
	   
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-121});
}

