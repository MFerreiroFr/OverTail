function EndObstacle(canvas, ctx, x, sizeY, y, choice = "end", speed = 3.7, damage = 0) {
  Obstacle.call(this,canvas,ctx,x,sizeY,y, speed, damage);
  this.color = "black";
  this.choice = choice;
}
EndObstacle.prototype = Object.create(Obstacle.prototype);
EndObstacle.prototype.constructor = EndObstacle;

EndObstacle.prototype.draw = function() {
  console.log(this.x)
  this.ctx.fillStyle = this.color
  this.ctx.fillRect(this.x, this.y , this.sizeX , this.sizeY);
}