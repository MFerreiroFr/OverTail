"use strict";

function Obstacle(canvas, ctx, x, sizeY, y, damage = 5) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.sizeX = 15;
  this.sizeY = sizeY;
  this.speed = 3.7;
  this.direction = -1;
  this.damage = damage;
  this.color = "white"
}

Obstacle.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x,
    this.y,
    this.sizeX,
    this.sizeY)
}

Obstacle.prototype.update = function() {
  this.x += this.speed * this.direction;
}

Obstacle.prototype.destroy = function() {
  this.x = -999;
}