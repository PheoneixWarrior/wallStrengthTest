var bullet, speed, weight
var wall, thickness

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white"

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80)

 

}

function draw() {
  background("blue");  
  bullet.velocityX = speed
  wall.depth = bullet.depth
  bullet.depth = bullet.depth+1

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0

   var damage = 0.5 * weight*speed*speed/(thickness*thickness*thickness)
   if (damage >10){
    bullet.shapeColor = "red"
   }
 
   if(damage>1 && damage<10){
    bullet.shapeColor ="green"


   }
 }
  drawSprites();
}
