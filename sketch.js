const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var stick1, stick2, stick3, stick4;
var block1;
var engine,world;

function setup() {
  createCanvas(400,400);
 engine =  Engine.create();
 world = engine.world;

  stick1 = new Stick(120, 270, 10, 50);
  stick2 = new Stick(140, 270, 10, 50);
  stick3 = new Stick(160, 270, 10, 50);
  stick4 = new Stick(180, 270, 10, 50);

  block1 = new Block(125, 240, 50,50);


  ground = new Ground(200, 390, 400, 20);

}

function draw() {
  background(0); 
  Engine.update(engine); 

  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();

  block1.display();

  ground.display();

}