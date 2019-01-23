function BlueObstacle(canvas, ctx, x, sizeY, y, speed = 3.7, damage = 5) {
  Obstacle.call(this, canvas, ctx, x, sizeY, y, speed, damage);
  this.color = '#59daff';
  this.topImage.src = "./assets/blueBoneUp.svg";
  this.bottomImage.src = "./assets/blueBoneDown.svg"
}

BlueObstacle.prototype = Object.create(Obstacle.prototype);
BlueObstacle.prototype.constructor = BlueObstacle;