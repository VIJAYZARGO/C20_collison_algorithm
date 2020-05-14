var MovingRect,FixedRect;


function setup() {
  createCanvas(1200,800);
  MovingRect = createSprite(400, 200, 80, 30);
  MovingRect.shapeColor = "green";
  MovingRect.debug = true ;
  FixedRect = createSprite(600,400,50,80);
  FixedRect.shapeColor ="green";
  FixedRect.debug = true;
}

function draw() {
  background(0);  

  MovingRect.x = World.mouseX ; 
  MovingRect.y = World.mouseY ;

  if(MovingRect.x - FixedRect.x < FixedRect.width/2 + MovingRect.width/2  &&
    FixedRect.x - MovingRect.x < FixedRect.width/2 + MovingRect.width/2  && 
    MovingRect.y - FixedRect.y < FixedRect.height/2 + MovingRect.height/2 &&
    FixedRect.y - MovingRect.y < FixedRect.height/2 + MovingRect.height/2){
    MovingRect.shapeColor = "violet";
    FixedRect.shapeColor = "violet";
  }
 else{
  MovingRect.shapeColor = "green";
  FixedRect.shapeColor = "green";
 }
  drawSprites();
}