function EndObstacle(canvas, ctx, x, sizeY, y, text, damage = 0) {
  Obstacle.call(this,canvas,ctx,x,sizeY,y,damage);
  this.color = "black";
}
EndObstacle.prototype = Object.create(Obstacle.prototype);
EndObstacle.prototype.constructor = EndObstacle;

EndObstacle.prototype.draw = function() {
  this.ctx.fillStyle = this.color
  this.ctx.fillRect(this.x, this.y , this.sizeX , this.sizeY);
}