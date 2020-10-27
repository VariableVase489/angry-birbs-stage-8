const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState="ready";
var score=0;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constrainedLog, constraintChain;

function preload() {
    bgYee();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(230,100);
    constraintChain = new YeeYee(bird.body, {x:230,y:100});

}

function draw(){
    if (backgroundImg!==undefined){
    background(backgroundImg);}
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig1.scoreUp();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    pig3.scoreUp();

    box5.display();
    log4.display();
    log5.display();
    text("score:" + score,20,20)

    bird.display();
    constraintChain.display();
    platform.display();
}
function keyPressed(){
    if (keyCode===32){
        constraintChain.attach(bird.body);
        gameState="ready";
    }
}
function mouseDragged() {
    if (gameState==="ready"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased() {
    constraintChain.fly();
    gameState="in air"
}
async function bgYee () {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/Paris");
    var data = await response.json();
    var dateTume = data.datetime;
    var r = dateTume.slice(11,13);
    console.log(r);
    if (r>=6&&r<=18) {
        backgroundImg = loadImage("sprites/bg.png");
    } else {
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}