const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinko = [];
var divisions = [];

var division1,division2,division3,division4,division5,division6,division7,division8;
var ground;

var divisionHeight = 300;

function setup() {
  createCanvas(900,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0,490,900,10);

  //division1 = new Division(5,250,10,400);
  //division2 = new Division(85,250,10,400);
  //division3 = new Division(165,250,10,400);
  //division4 = new Division(245,250,10,400);
  //division5 = new Division(325,250,10,400);
  //division6 = new Division(407,250,10,400);
  //division7 = new Division(485,250,10,400);
  //division8 = new Division(565,250,10,400);

  for(var j = 40; j <= width; j = j + 50){
    plinko.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinko.push(new Plinko(j,175));
  }

  for(var j = 15; j <= width - 20; j = j + 50){
    plinko.push(new Plinko(j,175));
  }

  for(var j = 15; j <= width - 20; j = j + 50){
    plinko.push(new Plinko(j,175));
  }
  for (var k = 0; k <= this.width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
}

function draw() {
  background("black");
  textSize(20);
  //text("Score : "+ score,20,30);
  Engine.update(engine);
  ground.display();
  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //score++
  }
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
}


