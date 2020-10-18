var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var Ground

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}




function setup() {
  
createCanvas (400,400)
  monkey = createSprite(80, 315, 1, 1);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;
  ground = createSprite(400,350,900,10)
  bananaGroup = new Group()
  ObstacleGroup = new Group()
  ground.velocityX = -4;
  ground.x = ground.width/2
  var survivalTime
}


function draw() {
  background("red")

  if(ground.x<0){
ground.x = ground.width/2
}
if(keyDown("space")){
   monkey.velocityY=-12;
   }
  monkey.velocityY = monkey.velocityY + 0.8 
 monkey.collide(ground)
  Food()
  Obstacles()
  textSize (20)
  fill  ("black")
  survivalTime = Math.ceil(frameCount/frameRate())
text ("survivalTime"+survivalTime, 100, 50)
  drawSprites()
}


function Food(){
  
  if(frameCount%80===0){
    
    banana = createSprite (600,250,40,10)
    banana.y = random(120,200)
    banana.velocityX = -5
    banana.lifetime = 300;
    monkey.depth = banana.depth+1
    banana.addImage (bananaImage)
    banana.scale = 0.05
    bananaGroup.add(banana)
  }
  
  
  
  
  
}


function Obstacles(){
  if(frameCount%300===0){
obstacle = createSprite(800,320,10,40)
  obstacle.velocityX = -6
    obstacle.addImage (obstacleImage)
    obstacle.scale = 0.15
    obstacle.lifetime = 800
    ObstacleGroup.add(obstacle)
  
  
  }


}