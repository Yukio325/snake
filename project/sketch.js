var s;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  s = new Snake();
  s.pickSnakePos();
}

function draw() {
  background(180);
  s.show();
  s.update();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
