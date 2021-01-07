var PLAY=1;
var END=0;
var gameState=1;
var swordImage,monsterImage;
var F1,F2,F3,F4;
var gameOverImage;
var sword;
var fruitGroup,enemyGroup;
var score = 0;

function preload(){
swordImage = loadImage("sword.png");
  

monsterImage = loadAnimation("alien1.png","alien2.png");
  
F1 = loadImage("fruit1.png");
F2 = loadImage("fruit2.png");
F3 = loadImage("fruit3.png");
F4 = loadImage("fruit4.png");
  
gameOverImage = loadImage("gameover.png");
knifeSwooshSound = loadSound("knifeSwooshSound.mp3");
gameOverSound = loadSound("gameover.mp3"); 
  
}

function setup(){
createCanvas(600,600);

// creating sword
sword = createSprite(40,200,20,20)
sword.addImage(swordImage);
sword.setCollider("rectangle",0,0,40,40);

fruitGroup = createGroup();
enemyGroup = createGroup();
score = 0;

}



function draw(){
background ("lightblue");
text("score:" + score,300,30);
  
if(gameState===PLAY){
  sword.y= World.mouseY;
  sword.x= World.mouseX;
  
  fruits();
  enemy();
  
  if(enemyGroup.isTouching(sword)){
    gameState=END;
    gameOverSound.play();
  }
  
if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  knifeSwooshSound.play();
  score=score+2;
  
}
}
  else if (gameState === END){
    sword.addImage(gameOverImage);
    sword.x=200;
    sword.y=200;
    
    
  }
 drawSprites();
}

function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    //fruit.debug=true;
    r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(F1);
    } else if ( r==2)  {
      fruit.addImage(F2);
    } else if ( r == 3) {
      fruit.addImage(F3);
    } else {
      fruit.addImage(F4);
    }
    
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);   
   }
}
 
  
function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y=Math.round(random(100,300));
// CHECK IT'S velocityX    
    monster.velocityX=-8;
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
  }
  
  
  
  
  
  
}










