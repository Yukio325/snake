function Snake() {
    var scl = 20;
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.ftPosX = 0;
    this.ftPosY = 0;

    this.pickSnakePos = function() {
      var cols = width/scl;
      var rows = height/scl;
      this.x = floor(random(cols))*scl;
      this.y = floor(random(rows))*scl;
    }

    this.dir = function(x, y) {
      this.xspeed = x;
      this.yspeed = y;
    }

    this.update = function() {
      this.x += this.xspeed*scl;
      this.y += this.yspeed*scl;
      if (this.x>width-scl || this.x<0 || this.y>height-scl || this.y<0) {
        this.xspeed = 0;
        this.yspeed = 0;
        this.pickSnakePos();
      }
    }

    this.show = function() {
      fill(255,0,0);
      noStroke();
      rect(this.ftPosX, this.ftPosY, scl, scl);
      fill(255);
      stroke(255);
      rect(this.x, this.y, scl, scl);
      for(i=1; i<(width/scl); i++) {
        line(scl*i, 0, scl*i, height);
        line(0, scl*i, width, scl*i);
      }
    }
}
