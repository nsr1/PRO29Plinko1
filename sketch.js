const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1
var box1, box2, box3, box4, box5, box6

function preload() {
}

function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(50,200,20)
    sling = new SlingShot(polygon,{x:200,y:100})

    ground = new Ground(400,700,800,20)
    stand1 = new Ground(425,400,120,5)

    box1 = new Box(400,365,30,40)
    box2 = new Box(430,365,30,40)
    box3 = new Box(460,365,30,40)

    box4 = new Box(415,325,30,40)
    box5 = new Box(445,325,30,40)

    box6 = new Box(430,285,30,40)

    Engine.run(engine);
    
}

function draw(){
    background(0)
    rectMode(CENTER)
    ground.display()
    stand1.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    polygon.display()
    sling.display()
    drawSprites()
}
