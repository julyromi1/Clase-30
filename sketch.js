const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit;
var rope;
var fruit_con;

var background1;
var rabbit;
var food;
var botton;
var bunny;

function preload(){
  background1 = loadImage ("background.png");
  botton = loadImage ("cut_button.png");
  food = loadImage ("melon.png");
  rabbit = loadImage ("Rabbit-01.png");

}

function setup() {
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope (7,{x:245, y:30}); //X y Y van dentro de una llave porque son puntos fijos de un cuerpo restringidos. Y el 7 es el número de los nlink que va a ver (clase rope).
  fruit = Bodies.circle (300,250, 20);
  Matter.Composite.add (rope.body,fruit); //Composite es cuantos cuerpos se unen en este caso se unen rope que es el cuerpo y fruit.
  fruit_con = new link (rope, fruit);

  bunny = createSprite (250,550,100,100);
  bunny.addImage (rabbit);
  bunny.scale=0.3;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  imageMode (CENTER);
  
}

function draw() 
{
  background(51);
  image (background1, width/2, height/2,500,700);
  image (food,fruit.position.x, fruit.position.y, 60, 60);

  ground.show();
  rope.show ();
  //ellipse (fruit.position.x, fruit.position.y, 30, 30); //Se comenta porque es lo mismo de la linea 52.
  drawSprites ();
  Engine.update(engine);
  

 
   
}
