"use strict";

function Player(canvas, ctx, bottomBorder) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = 20;
  this.size = 15;
  this.y = canvas.height - this.size;
  this.hp = 20;
  this.direction = 0;
  this.speed = 5;
  this.bottomBorder = bottomBorder;
}

Player.prototype.draw = function() {
  this.ctx.fillStyle = "white"
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
  
}

Player.prototype.update = function() {
  this.y = Math.min(Math.max(0, this.y + this.direction * this.speed), this.canvas.height - this.bottomBorder - this.size);
}

Player.prototype.moveUp = function() {
  this.direction = -1;
}

Player.prototype.moveDown = function() {
  this.direction = 1;
}

Player.prototype.stop = function() {
  this.direction = 0;
}

Player.prototype.hasCollidedWithObstacle = function(obstacle) {
  var collidesRight = this.x + this.size / 2 >= obstacle.x;
  var collidesTop = this.y + this.size / 2<= obstacle.y + obstacle.sizeY;
  var collidesBottom = this.y + this.size / 2 > obstacle.y;
  if(collidesBottom && collidesRight && collidesTop) console.log(`Collided!`)
  return collidesBottom && collidesRight && collidesTop;
}

Player.prototype.receiveDamage = function() {
  this.hp -= 5;
}
