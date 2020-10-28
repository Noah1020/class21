var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {

  createCanvas(1100,800);

  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor= "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor= "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor= "green";
  
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor= "green";

  fixedRect.velocityY = -2;
  gameObject2.velocityY = 2;
}

function draw() {

  background(0,0,0); 

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(isTouching(movingRect,gameObject2)){

gameObject2.shapeColor = "blue";
movingRect.shapeColor = "blue";

  }
  else {
    gameObject2.shapeColor = "green";
movingRect.shapeColor = "green";
  }

  bounceoff(fixedRect,gameObject2);
 
  drawSprites();
  
}




