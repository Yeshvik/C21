var mr,fr;
function setup() {
 createCanvas(800,400);
 fr = createSprite(400, 200, 80, 30);
 fr.shapeColor = "green";
 fr.debug = true;
 //fr.velocityX = -3;
 
 mr = createSprite(100, 200, 80, 30);
 mr.shapeColor = "green";
 mr.debug = true;
 //mr.velocityX = 3;

 ar = createSprite(300, 200, 50, 50);
 ar.shapeColor = "green";
 ar.debug = true;

 br = createSprite(500, 200, 50, 50);
 br.shapeColor = "green";
 br.debug = true;

 cr = createSprite(700, 200, 50, 50);
 cr.shapeColor = "green";
 cr.debug = true;
}

function draw() {
  background(0);
  mr.x = mouseX;
  mr.y = mouseY; 
 
  if (isTouching(mr,br)){ //mr,fr are arguments
    mr.shapeColor = "red";
    br.shapeColor = "red";
  }
   else{
    mr.shapeColor = "green";
    br.shapeColor = "green";
  }
  drawSprites();
}


//true and false are boolean values

function bounceOff(){
  if (mr.x-fr.x<mr.width/2+fr.width/2&&fr.x-mr.x<mr.width/2+fr.width/2){
    mr.velocityX = mr.velocityX*(-1);
    fr.velocityX = fr.velocityX*(-1);
}
if (mr.y-fr.y<mr.height/2+fr.height/2&&fr.y-mr.y<mr.height/2+fr.height/2){
  mr.velocityY = mr.velocityY*(-1);
  fr.velocityY = fr.velocityY*(-1);
}
}
//types of functions:1 no argument no return,2 no argument but return,3 both argument and return