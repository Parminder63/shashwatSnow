const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow;
var player;
var ground;

function preload(){
  bgImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,380,400,10);
  for(var i=0;i<10;i++){
    snow = new Snow(Math.round(random(0,800)),0,20);
    
  }
  player = new Player(200,200,30,30);
}

function draw() {
  background(bgImg);
  ground.display();
  player.display();
  Engine.update(engine);

  
  
  snow.display();
  
}