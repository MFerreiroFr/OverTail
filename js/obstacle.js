"use strict";

function Obstacle(canvas, ctx, x, sizeY, y, damage = 5) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.sizeX = 12;
  this.sizeY = sizeY;
  this.speed = 3.7;
  this.direction = -1;
  this.damage = damage;
  this.color = "white";
  this.topImage = new Image();
  this.bottomImage = new Image();
  this.topImage.src = "./assets/boneUp.svg";
  this.bottomImage.src = "./assets/boneDown.svg"
}

Obstacle.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.drawImage(this.topImage,this.x - 2.5 ,
    this.y,
    19,
    this.sizeX);
  
  this.ctx.drawImage(this.bottomImage,this.x - 2.5,
    this.y + this.sizeY - 8,
     19,
     this.sizeX);

  this.ctx.fillRect(this.x +1, this.y + 8, this.sizeX , this.sizeY - 8);
   
}

Obstacle.prototype.update = function() {
  this.x += this.speed * this.direction;
}

Obstacle.prototype.destroy = function() {
  this.x = -999;
}