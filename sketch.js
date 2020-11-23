var fixerect, movingrect,gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(400, 100, 50, 50);
  movingrect = createSprite(400,700,20,20);
  fixedrect.shapeColor = "blue";
  movingrect.shapeColor = "blue";
  fixedrect.velocityY = +5;
  movingrect.velocityY = -5;

  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(700,100,50,50);
  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;

  gameObject3 = createSprite(500,100,60,60);
  gameObject4 = createSprite(600,100,60,60);


}

function draw() {
  background(255,255,255);  
  //movingrect.x = mouseX;
  gameObject4.x = mouseX;
  gameObject4.y = mouseY;
  bounceOff(fixedrect, movingrect);
  bounceOff(gameObject1, gameObject2);
  if(isTouching(gameObject3, gameObject4)){
    gameObject3.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else{
    gameObject3.shapeColor = "grey";
    gameObject4.shapeColor = "grey";
  }
  drawSprites();
}

