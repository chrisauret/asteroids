function Ship() {

  this.pos = createVector(width/2, height/2);
  this.r = 10;
  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(0,0);

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render  = function() {
    translate(this.pos.x, this.pos.y);
    var c = color(255, 204, 0);  fill(c); noStroke();
    rotate(this.heading + PI /2);    
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  }

  this.turn = function() {
    this.heading += this.rotation;
  }

  this.setRotation = function(a){
    this.rotation = a;
  }

  this.boost = function(){
    var force = p5.Vector.fromAngle(this.heading);
    this.vel.add(force);
  }
}