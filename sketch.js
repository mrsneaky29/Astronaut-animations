var  bg,sleep,brush,gym,eat,drink,move,astronaut,bath;


function preload(){
bg=loadImage("iss.png");
sleep=loadAnimation("sleep.png");
brush=loadAnimation("brush.png");
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eat=loadAnimation("eat1.png","eat2.png");
drink=loadAnimation("drink1.png","drink2.png");
move=loadAnimation("move.png","move1.png")
bath=loadAnimation("bath1.png,bath2.png")
}


function setup() {
  createCanvas(800,400);
   astronaut=createSprite(300,230);
   astronaut.addAnimation(sleep);
   astronaut.scale=0.1;
   if(keyDown("UP_ARROW")){
     astronaut.changeAnimation(brush);
     astronaut.y=350;
   }
   if(KeyDown("DOWN_ARROW")){
     astronaut.changeAnimation(gym)
   }
   if(KeyDown("LEFT_ARROW")){
     astronaut.changeAnimation(eat)
   }
   if(KeyDown("RIGHT_ARROW")){
     astronaut.changeAnimation(bath)
   }
   if(keyDown("m")){
     astronaut.changeAnimation(move)
   }


}

function draw() {
  background(255,255,255);  
  drawSprites();
}