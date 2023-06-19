const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
 var rabbit,rabbitImg
var fruitGroup
var backgroundImg
var score=0
var gameState= "PLAY"
var obstacleGroup
var fruit1Img,fruit2Img,fruit3Img,fruit1,fruit2,fruit3
var waterImg
var coneImg
var ground
var day
var cone
var puddle
var gameOver,gameOverImage


function preload(){
backgroundImg = loadImage ("785daf4db5da505f4b65153bac5e8345-removebg-preview.png")
rabbitImg = loadImage ("cute-rabbit-cartoon-character-running-vector-44760300-removebg-preview.png")
coneImg = loadImage ("096214a506862dfeb83db3ae8936f315-removebg-preview.png")
waterImg = loadImage ("puddle.jpg")
fruit1Img = loadImage ("mandarin-orange-vector-graphics-juice-fruit-png-favpng-8PNta3p12WcEPWNej0ERCRpu2.jpg")
fruit2Img = loadImage ("watermelon-split-cartoon-png.webp")
fruit3Img = loadImage ("096214a506862dfeb83db3ae8936f315-removebg-preview.png")
gameOverImage = loadImage ("images.jpg")
fruitGroup = new Group()
obstacleGroup = new Group()

}




function setup() {
  createCanvas(600,600);
  frameRate(80)
    ground = createSprite(10,590,400,50)
    ground.velocityX= -2
    ground.visible=false
    engine = Engine.create();
    world = engine.world;
    day = createSprite(300,300,100,100)
    day.scale = 1.3
    day.addImage(backgroundImg)
    rabbit = createSprite(300,300,10,10)
    rabbit.addImage(rabbitImg)
    rabbit.scale = 0.4
    gameOver.addImage(gameOverImage)
    obstacleGroup = createGroup()
    fruitGroup = createGroup()
  
  
}


function draw() 
{
  background(51)
  Engine.update(engine);
  if (gameState = "PLAY") {
    if(ground.x < 0){
      ground.x = 10}
      if(day.x < 200){
        day.x = 300}
        if(ground.x < 0){
          ground.x = 10}
          if(day.x < 200){
            day.x = 300}
            text("Score:0",50,550)
            if (rabbit.isTouching(fruit1)){
            fruit1.destroy()
            score = +1
            }
            if (rabbit.isTouching(fruit2)){
              fruit2.destroy()
              score = +1
              }
              if (rabbit.isTouching(fruit3)){
                fruit3.destroy()
                score = +1
                }
                Controls()
          fruitObstacles()
  }
  else{

  
 
              if (rabbit.isTouching(cone)){
                rabbit.destroy()
                
                gameOver = createSprite(height/2,width/2)
                }
                if (rabbit.isTouching(puddle)){
                  rabbit.destroy()
                  gameOver = createSprite(height/2,width/2)
                  rabbit.destroy()
                  rabbit.velocityX = 0
                  puddle.destroy()
                  puddle.velocityX = 0
                  cone.destroy()
                  cone.velocityX = 0
                  fruit1.destroy()
                  fruit1.velocityX = 0
                  fruit2.destroy()
                  fruit2.velocityX = 0
                  fruit3.destroy()
                  fruit3.velocityX = 0
                  
                  }

                }

                  
          
          drawSprites()
        }

    function Controls () {
     if (keyDown(LEFT_ARROW)) {
      rabbit.velocityX = -2
     }
     if (keyDown(RIGHT_ARROW)) {
      rabbit.velocityX = 2
     }
     

    

    }
    function fruitObstacles(){
      if(frameCount%240==0){
        cone = createSprite(250,550)
        //cone.x=Math.round(random(0,50))
        cone.addImage("cone",coneImg)
        cone.scale=0.1
        cone.lifetime= 800
        obstacleGroup.add(cone)
        puddle = createSprite(570,300)
       puddle.addImage("puddle",waterImg)
        puddle.scale=0.1
        puddle.lifetime= 800
        //puddle.x=Math.round(random(0,50))
        obstacleGroup.add(puddle)
        rabbit.depth=puddle.depth+1
        rabbit.depth=cone.depth+1
       fruit1 = createSprite(250,750)
       //cone.x=Math.round(random(0,50))
       fruit1.addImage("fruit1",fruit1Img)
       fruit1.scale=0.1
       fruit1.lifetime= 800
       fruitGroup.add(fruit1)
       fruit2 = createSprite(570,550)
      fruit2.addImage("fruit2",fruit2Img)
       fruit2.scale=0.1
       fruit2.lifetime= 800
       //puddle.x=Math.round(random(0,50))
       fruitGroup.add(fruit2)
       rabbit.depth=fruit1.depth+1
       rabbit.depth=fruit2.depth+1
       fruit2.velocityX=-2
      fruit1.velocityX=-2
      fruit3 = createSprite(570,550)
      fruit3.addImage("fruit3",fruit3Img)
       fruit3.scale=0.1
       fruit3.lifetime= 800
       //puddle.x=Math.round(random(0,50))
       fruitGroup.add(fruit3)
       rabbit.depth=fruit3.depth+1
       rabbit.depth=fruit3.depth+1
       fruit3.velocityX=-2
      
        
        }
        
      
        }
      
        
        
        
        
        
        
        
    
    




  
      