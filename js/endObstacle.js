function EndObstacle(canvas, ctx, x, sizeY, y, text, damage = 0) {
  Obstacle.call(this,canvas,ctx,x,sizeY,y,damage);
  this.color = "black";
}
EndObstacle.prototype = Object.create(Obstacle.prototype);
EndObstacle.prototype.constructor = EndObstacle;