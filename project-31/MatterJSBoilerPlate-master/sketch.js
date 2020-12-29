
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gr0und;


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	gr0und = new ground(300,790,900,20);

	for(var k = 0; k <=width; k= k + 80){
		divisions.push(new division(k , height-divisionHeight/2 , 10 ,divisionHeight));
	}
	
	for(var j = 40; j <=width; j = j+50){
		plinkos.push(new plinko(j,75));
	}
	
	for(var w = 15; w <=width-10; w=w+50){
		plinkos.push(new plinko(w,175));
	}
	
	if(frameCount%60===0){
		particles.push(new particle(random(width/2-10 , width/2+10 , 10 , 10)));
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  for(var k=0; k < particles.length; k++){
	  particles[k].display();
  }

  for(var a=0; a < divisions.length; a++){
	  divisions[a].display();
  }

  gr0und.display();

  drawSprites();
 
}



