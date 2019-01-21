"use strict";

function GameScreen(name, canvas, changeScreen) {
  Screen.call(this, name, canvas, changeScreen);

  this.statusBar = {
    x: 0,
    y: this.canvas.height - 100,
    sizeX: this.canvas.width,
    sizeY: 100
  },
  this.elements = { 
    player: new Player(this.canvas, this.ctx, this.statusBar.sizeY),
    obstacles: [
      new Obstacle(canvas, this.ctx, canvas.width * 2 + 15, 250, 0),

      new Obstacle(canvas, this.ctx, canvas.width * 3 + 15, 160, canvas.height - this.statusBar.sizeY - 160),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 15, 160, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 200, 160, canvas.height - this.statusBar.sizeY - 160),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 200, 160, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 275, 200, canvas.height - this.statusBar.sizeY - 200),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 275, 120, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 350, 240, canvas.height - this.statusBar.sizeY - 240),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 350, 80, 0),

      new Obstacle(canvas, this.ctx, canvas.width * 4 + 200, 240, canvas.height - this.statusBar.sizeY - 240),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 200, 80, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 275, 200, canvas.height - this.statusBar.sizeY - 200),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 275, 120, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 350, 160, canvas.height - this.statusBar.sizeY - 160),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 350, 160, 0),
    ]
  }
}

GameScreen.prototype.draw = function() {
  this.elements.player.draw();
  this.ctx.strokeRect(
    this.statusBar.x,
    this.statusBar.y,
    this.statusBar.sizeX, 
    this.statusBar.sizeY);
    this.elements.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    })
}

GameScreen.prototype.update = function() {
  this.elements.player.update();
  this.elements.obstacles = this.elements.obstacles.filter(function(obstacle) { return obstacle.x > 0 - obstacle.sizeX })
  this.elements.obstacles.forEach(function(obstacle) {
    obstacle.update();
    if(this.elements.player.hasCollidedWithObstacle(obstacle)) {
      this.elements.player.receiveDamage();
      obstacle.destroy();
      if(this.elements.player.hp <= 0) this.changeScreen(this.name)
    }
  }.bind(this))
}

GameScreen.prototype.moveUp = function() {
  this.elements.player.moveUp();
}

GameScreen.prototype.moveDown = function() {
  this.elements.player.moveDown();
}

GameScreen.prototype.stopPlayer = function() {
  this.elements.player.stop();
}