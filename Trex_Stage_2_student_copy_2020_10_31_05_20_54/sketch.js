var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudimg=loadImage("cloud.png")
  o1=loadImage("obstacle1.png")
  o2=loadImage("obstacle2.png")
  o3=loadImage("obstacle3.png")
  o4=loadImage("obstacle4.png")
  o5=loadImage("obstacle5.png")
  o6=loadImage("obstacle6.png")
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("white");
  
  if(keyDown("space")&& (trex.y>=160)) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
 
  clouds();
  obstacles();
  
  drawSprites();
  
  
}

function clouds()
{
  if (frameCount%60===0)
    {
      var cloud=createSprite(600,120,40,10);
      cloud.y=Math.round(random(60,110));
      console.log(cloud.y);
      cloud.addImage("cloud",cloudimg);
      cloud.scale=0.5;
      cloud.velocityX=-5;
      cloud.liftiime=120;
      
      cloud.depth=trex.depth;
      trex.depth=trex.depth+1;
    }     
}
function obstacles()
{
  if(frameCount%80===0)
    {
      var obstacles=createSprite(600,160,20,20);
      obstacles.scale=0.5;
      obstacles.velocityX=-5;
      obstacles.lifetime=120;
      var rand=Math.round(random(1,6));
      switch(rand)
      {
        case 1:obstacles.addImage(o1)
        break;
        case 2:obstacles.addImage(o2)
        break;
        case 3:obstacles.addImage(o3)
        break;
        case 4:obstacles.addImage(o4)
        break;
        case 5:obstacles.addImage(o5)
        break; 
        case 6:obstacles.addImage(o6)
        break;
        
        default:
        break;
      }
        
      
      
    }
}