var spy,enemy,spyimage,soldireImage,wand;
var lifeline;
var spy2, spy2img;
var score;
var gameState;
function preload(){
spyimage=loadImage("1234.png");
backgroundImage=loadImage("background.jpg");
soldireImage=loadImage("soldire3.png");
spy2img= loadImage("120350.png");
backgroundImage2=loadImage("images.png");

}

function setup(){
 createCanvas(displayWidth,displayHeight-100);




 spy=createSprite(200,450,20,20);
spy.addImage("spy",spyimage);
spy.scale=0.3;
spy.debug=false;
spy.setCollider("rectangle",200,0,1,200);
lifeline=3;
soldireg= new Group();

score=0;
}


function draw(){
 background(backgroundImage);   

 

   fill("blue");
   textSize(30);
    text("Score  :"+score,1000,50);
    if (keyWentDown("space")){
   
       spy.addImage("spy", spy2img);
       spy.scale=0.2;
       wand= createSprite(spy.x+135,spy.y-60,10,10);
       wand.visible=false;
       if(soldireg.isTouching(wand)){
         soldireg.destroyEach();
         score=score+20;
        }
   
        
    }
    if (keyWentUp("space")){
   
      spy.addImage("spy", spyimage);
      spy.scale=0.35;
     
   
     
    }
   
    if(score>=300){
      spy.visible=false;
      soldireg.setLifetimeEach(0)
      backgroundImage=loadImage("you won.jpg");
      
     }
    if(score>=100){
   
      enemy.velocityX=-10;
    }
    if(score>=150){
   
      enemy.velocityX=-15;
    }
    if(score>=200){
   
      enemy.velocityX=-20;
    }
    if(score>=250){
   
      enemy.velocityX=-25;
    }
    if(lifeline===0){
      //spy.addImage("spy",backgroundImage2);
      
      backgroundImage=loadImage("images.png");
   spy.visible=false;
   enemy.visible=false;
      
    }
    
   
    if(soldireg.isTouching(spy)){
      lifeline=lifeline-1;
      reset();
   }
    soldire();
    textSize(30);
   text("Lifeline : " +lifeline,750,50);
   










 
 drawSprites();   
}

function soldire(){
   if (frameCount % 250===0){
    enemy=createSprite(displayWidth+20,450,20,20);
    enemy.addImage("enemy",soldireImage);
    enemy.scale=0.9;
    enemy.debug=false;
    enemy.setCollider("rectangle",40,0,200,200);
    enemy.velocityX=-8;
    soldireg.add(enemy)
   }
}
function reset(){
   spy.addImage("spy", spyimage);
   spy.scale=0.35;
   console.log("reset")
   soldireg.destroyEach();

}
