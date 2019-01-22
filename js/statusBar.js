function StatusBar(canvas, ctx, height) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = 0;
  this.y = this.canvas.height - height;
  this.sizeX = this.canvas.width;
  this.sizeY = height;
  this.hp = 20;
}

StatusBar.prototype.draw = function() {
  this.ctx.strokeStyle = "white";
  this.ctx.strokeRect(this.x, this.y, this.sizeX, this.sizeY);
  
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.sizeX / 2 - 25, this.canvas.height - this.sizeY / 2 - 5, 50, 10);

  this.ctx.fillStyle = "yellow";
  this.ctx.fillRect(this.sizeX / 2 - 25, this.canvas.height - this.sizeY / 2 - 5, 50 * (this.hp / 20), 10)
}

StatusBar.prototype.update = function(hp) {
  this.hp = hp;
}