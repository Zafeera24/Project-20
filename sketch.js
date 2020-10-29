var car1, car2, car3;
var wall1, wall2, wall3;
var speed, weight;
var deformation = 0.5*weight*speed*speed /22509;

function setup() {
  createCanvas(1600,400);
  
  car1 = createSprite(400, 100, 33, 33);
  car1.shapeColor = "white";
  car1.velocityX = 2;
  car2 = createSprite(400, 200, 33, 33);
  car2.shapeColor = "white";
  car2.velocityX = 2;
  car3 = createSprite(400, 300, 33, 33);
  car3.shapeColor = "white";
  car3.velocityX = 2;

  wall1 = createSprite(1500, 100, 20, 66);
  wall2 = createSprite(1500, 200, 20, 66);
  wall3 = createSprite(1500, 300, 20, 66);


  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("black");  

if(wall1.x - car1.x < (car1.width + wall1.width) /2){
  car1.velocityX = 0;
  car1.shapeColor = "red";
}

if(wall2.x - car2.x < (car2.width + wall2.width) /2){
  car2.velocityX = 0;
  car2.shapeColor = "green";
}

if(wall3.x - car3.x < (car3.width + wall3.width) /2){
  car3.velocityX = 0;
  car3.shapeColor = "yellow";
}

  drawSprites();
}