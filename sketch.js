
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(400,400)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,350,400,10)
  ground.velocityX=-4
  ground.x=ground.width/2

  bananaGroup=new Group()
  obstacleGroup=new Group()
}


function draw() {
background("cyan")
 if(ground.x<200){
   ground.x=ground.width/2
   
 } 
  
  monkey.velocityY=monkey.velocityY +0.8
  
  if(monkey.isTouching(ground)){
    monkey.velocityY=0
  }
  
  if(keyDown("space")&&monkey.y>120){
    monkey.velocityY=-10
  }
  
  spawnBanana()
  spawnObstacles()
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score"+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time"+survivalTime,100,50)
  
 //console.log()
  drawSprites()
}

function spawnBanana(){
  if(frameCount%80===0){
  banana=createSprite(400,120,20,20)
  banana.addImage("banana image",bananaImage)
  banana.scale=0.1
  banana.velocityX=-4
  banana.y=random(120,200)
  banana.lifetime=100
    bananaGroup.add(banana)
  }
}

function spawnObstacles(){
  if(frameCount%300===0){
  obstacle=createSprite(400,320,20,20)
  obstacle.addImage("obstacles image",obstacleImage)
  obstacle.scale=0.2
  obstacle.velocityX=-4
  obstacle.lifetime=100
    obstacleGroup.add(obstacle)
  }                                         
}

