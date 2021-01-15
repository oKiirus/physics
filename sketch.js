const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,400,400,20,ground_options)
  var ball_setting = {
  restitution : 1,
  density : 10
  }
  ball = Bodies.circle(200,200,40, ball_setting)
  World.add(world,ground)
  World.add(world,ball)
  console.log(ball)
}

function draw() {
  background("lightblue"); 
  Engine.update(engine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 40)
}
