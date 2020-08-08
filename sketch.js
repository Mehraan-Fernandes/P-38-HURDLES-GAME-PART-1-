
/*
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
*/

var form; 
var player;
var hurdles = []

function setup() {
    var canvas = createCanvas(800,600);
    frameRate(50)
  /*  engine = Engine.create();
    world = engine.world;*/
    player = new Player();
    
    //ground  = new Ground(width/2,height-15,width,30)
    //form = new Form();
}

function keyPressed() {
    if (keyCode === 32) {
     var jump = createVector(0,-4.5);
     player.applyForce(jump);
    }   
}

function draw() {
    background(0);
    
    translate(-player.pos.x + 50 ,0)
    var gravity = createVector(0,0.1);
    player.applyForce(gravity);
  
    player.display();  
    player.update();
    player.edges();
    /*
    fill(255,0,100)
    rect(400,height-60,20,60)
  */
    if(frameCount % 200 === 0){
    hurdles.push(new Ground(player.pos.x+width,height-20,40,40));
    }
    
    for (var i  = 0; i < hurdles.length; i++) {
        hurdles[i].display();  
    }   
}


