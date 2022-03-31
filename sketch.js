const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("background.png");
  brickImg = loadImage("brick.png");
}

function setup() {
  
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Box(300, 390, 600, 20);
  Matter.Body.setStatic(ground.body,true);
  
 box1 = new Box(200, 100, 90, 50);
  box2 = new Box(200, 100, 90, 50);
  box3 = new Box(200, 100, 90, 50);

  box4 = new Box(290, 100, 90, 50);
  box5 = new Box(290, 100, 90, 50);
  box6 = new Box(290, 100, 90, 50);
  box7 = new Box(290, 100, 90, 50);
  box8 = new Box(290, 100, 90, 50);
  box9 = new Box(290, 100, 90, 50);
  
  box10 = new Box(380, 100, 90, 50);
  box11 = new Box(380, 100, 90, 50);
  box12 = new Box(380, 100, 90, 50);
  box13 = new Box(380, 100, 90, 50);
  box14 = new Box(380, 100, 90, 50);

  hero = new Hero(100,200,100);
  rope = new Rope(hero.body, { x: 100, y: 50 });
  monster = new Monster(500,100,150);

 
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  
  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x:mouseX, y: mouseY});
}


