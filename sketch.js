var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  //create the sprite for fixed rectangle
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  //create the sprite for moving rectangle
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0,0,0); 
  //make the moving rectangle move with the mouse 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //change the color if the moving rectangle touches the fixed rectangle from top, bottom, right or left side
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
       movingRect.shapeColor = "red";
       fixedRect.shapeColor = "red";
  }

  // keep the color green if the moving rectangle does not touches the fixed rectangle 
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

drawSprites();
}