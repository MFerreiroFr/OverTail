"use strict";

function StatusBar(canvas, ctx, height) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = 0;
  this.y = this.canvas.height - height;
  this.sizeX = this.canvas.width;
  this.sizeY = height;
  this.hp = 20;
}

StatusBar.prototype.draw = function(numOfObstacles, levelLength) {
  this.ctx.strokeStyle = "white";
  this.ctx.strokeRect(this.x, this.y, this.sizeX, this.sizeY);

  this.ctx.font = "20px Determination";
  this.ctx.fillStyle = "white";
  this.ctx.fillText("HP",this.sizeX / 2 - 230, this.canvas.height - this.sizeY / 2 - 1)
  
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.sizeX / 2 - 200, this.canvas.height - this.sizeY / 2 - 5, 50, 10);

  this.ctx.fillStyle = "yellow";
  this.ctx.fillRect(this.sizeX / 2 - 200, this.canvas.height - this.sizeY / 2 - 5, 50 * (this.hp / 20), 10);

  this.ctx.strokeRect(this.sizeX / 2 + 30, this.canvas.height - this.sizeY / 2 - 5, 200, 10);
  this.ctx.fillStyle = "white";
  this.ctx.fillText("DETERMINATION: ", this.sizeX / 2 - 45, this.canvas.height - this.sizeY / 2)
  this.ctx.fillRect(this.sizeX / 2 + 30, this.canvas.height - this.sizeY / 2 - 5, 200  - 200 * (numOfObstacles / levelLength), 10)
}

StatusBar.prototype.update = function(hp) {
  this.hp = hp;
}