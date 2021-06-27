var circle, wood1, wood2, wood3;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  circle = new Circle(400, 300, 10);
  wood1 = new Wood(550, 400, 10, 100, 0);
  wood2 = new Wood(560, 500, 10, 160, 90);
  wood3 = new Wood(400, 400, 10, 100, 0);

  Engine.run(engine);
}

function draw() {
  background(0);
  //Engine.update(engine);

  circle.display();
  wood1.display();
  wood2.display();
  wood3.display();
  if (keyDown("space")) {
    Matter.Body.applyForce(circle.body, circle.body.position, {
      x: 85,
      y: -85,
    });
    console.log("pressed key down");
  }
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(circle.body, circle.body.position, {
      x: 85,
      y: -85,
    });
    console.log("pressed key down");
  }
}
