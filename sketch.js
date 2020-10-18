var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));

  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.weight=weight;
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,50, 80);

  console.log("bullet velocity :"+bullet.velocityX);
  console.log("bullet weight :"+bullet.weight);
  console.log("bullet x :"+bullet.x);
}

function draw() {
  background(255,255,255);  
  console.log(wall.x+"wall.width"+wall.width);
  if(hasCollided(bullet,wall)) {
    console.log(" colided");
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<=10){
      wall.shapeColor=color(0,225,0);
    }
    bullet.velocityX=0;
    bullet.x = wall.x-bullet.width;
  }else {
    console.log("not colided");
  }

  drawSprites();
  createEdgeSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x; 

  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  else{ 
    return false;
  }
}
