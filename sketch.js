
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var ball;
var net1;
var net2;
var net3;
var net4 , net5 , net6;
var slingshot;

var groundBody;

var img;
var sprt;

var ppr;
var pprImg;

function preload(){img=loadImage("sprites/dustbingreen.png");pprImg=loadImage("sprites/paper.png")}

function setup(){

createCanvas(1220, 555);

engine = Engine.create();
world = engine.world;

sprt=createSprite(910,405,50,10);
sprt.shapeColor="black";
sprt.addImage(img);
sprt.scale=0.55;

ppr=createSprite(150 , 555 , 10 , 10);
ppr.addImage(pprImg);
ppr.scale=0.3;
  
ball = new Paper(150 , 400 , 20);
       
slingshot= new Rope(ball.body , {x:550 , y:100});

net1= new Net(975,405,15,175);
net2= new Net(845,405,15,175);
net3=new Net(900,490,125,15);
net4=new Net(1220,height/2 , 20 , height);
net5=new Net(1, height/2 , 20 , height);
net6=new Net(width/2, 555 , width , 20);

var options={isStatic:true}
groundBody = Bodies.rectangle(width/2 , 500 , width , 10 ,options);
fill("black");
World.add(world , groundBody);
   
Engine.run(engine);}


function draw(){

rectMode(CENTER);
ppr.x=ball.body.position.x;
ppr.y=ball.body.position.y;
ball.display();


net1.display();
net2.display();
net3.display();
net4.display();
net5.display();
net6.display();




 
background("white");



slingshot.display();

Engine.update(engine);

rect(width/2 , 500 , width , 10 );

drawSprites();}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.release();
}

//function keyPressed(){if(keyCode === UP_ARROW){Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-50});}}




