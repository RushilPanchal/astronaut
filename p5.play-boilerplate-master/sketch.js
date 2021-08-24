var bg, sleep, brush, gym, eat, move, drink, bath, astronaut

function preload(){
  bg = loadImage("images/iss.png")
  sleep = loadAnimation("images/sleep.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  bath = loadAnimation("images/bath1.png","images/bath2.png")

}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale = 0.1
  
}

function draw() {
  background(bg);
  textSize(20)
  fill("white")
  text("Instructions:", 20, 35)
  textSize(15)
  text("Up Arrow = Brushing", 20, 55)
  text("Down Arrow = Gym", 20, 70)
  text("Left Arrow = Eating", 20, 85)
  text("Right Arrow = Bathing", 20, 100)
  text("m key = Moving", 20, 115)
  edges = createEdgeSprites()
  astronaut.bounceOff(edges)
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gym", gym)
    astronaut.changeAnimation("Gym")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating", eat)
    astronaut.changeAnimation("Eating")
    astronaut.y = 350
    astronaut.x = 150
    astronaut.velocityX = 0.5
    astronaut.velocityY = 0.5
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Bathing", bath)
    astronaut.changeAnimation("Bathing")
    astronaut.x = 300
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("m")){
    astronaut.addAnimation("Moving", move)
    astronaut.changeAnimation("Moving")
    astronaut.velocityX = 0.5
    astronaut.velocityY = 0.5
  }

  drawSprites()
}