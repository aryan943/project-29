const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot,ground;
var box1,box2,box3,box4,box5,box6,box7;
var polygon;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height-100,400,20);
    box1 = new Box(650,height-150,100,100); 
    box2 = new Box(750,height-150,100,100);
    box3 = new Box(850,height-150,100,100); 
    box4 = new Box(950,height-150,100,100); 
    box5 = new Box(750,height-200,100,100); 
    box6 = new Box(850,height-200,100,100); 
    box7 = new Box(800,height-250,100,100);
    
    polygon = new pol(400,300,45);
  
   slingshot = new Slingshot(polygon.body,{x:400,y:200});

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    slingshot.display();
    polygon.display();
    
    
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    slingshot.fly();
    
}