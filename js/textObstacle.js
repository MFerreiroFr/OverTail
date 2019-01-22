function TextObstacle(canvas, ctx, x, sizeY, y,  text, damage = 0) {
  Obstacle.call(this,canvas,ctx,x,sizeY,y,damage);
  this.text = text;
}
TextObstacle.prototype = Object.create(Obstacle.prototype);
TextObstacle.prototype.constructor = TextObstacle;

TextObstacle.prototype.draw = function() {
  this.ctx.fillStyle = "white";
  this.ctx.font = "Arial 20px";
  this.ctx.fillText(this.text, this.x, this.y)
}