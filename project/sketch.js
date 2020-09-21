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
  switch (keyCode) {
    case UP_ARROW:
      if (s.yspeed !== 1) {
        s.dir(0, -1);
        break;
      }
      break;
    case DOWN_ARROW:
      if (s.yspeed !== -1) {
        s.dir(0, 1);
        break;
      }
      break;
    case RIGHT_ARROW:
      if (s.xspeed !== -1) {
        s.dir(1, 0);
        break;
      }
      break;
    case LEFT_ARROW:
      if (s.xspeed !== 1) {
        s.dir(-1, 0);
        break;
      }
      break;
    default:
      break;
  }
}
