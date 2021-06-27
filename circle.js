const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

class Circle {
  constructor(x, y, r) {
    var options = {
      density: 1.5,
      friction: 1.0,
      restitution: 0.5,
    };

    //this.Image = loadImage("sprites/bird.png")
    this.body = Bodies.circle(x, y, r, options);
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    World.add(world, this.body);
    console.log(this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    Body.translate(this.body, { x: pos.x, y: pos.y });
    Body.rotate(this.body, angle);
    strokeWeight(1);
    stroke("purple");
    fill("pink");
    ellipseMode(RADIUS);
    ellipse(35, 500, 18, this.radius, this.radius);
    pop();
  }
}
class Wood {
  constructor(x, y, w, h, a) {
    var options = {
      restitution: 0.8,
      friction: 0.3,
      density: 1,
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    Matter.Body.setAngle(this.body, a);
    this.width = w;
    this.height = h;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("green");
    stroke("yellow");
    //rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
