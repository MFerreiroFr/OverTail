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
      //new Obstacle(canvas, this.ctx, canvas.width * 2 + 15, 250, 0),

      new Obstacle(canvas, this.ctx, canvas.width * 3 + 15, 175, canvas.height - this.statusBar.sizeY - 175),
      //new Obstacle(canvas, this.ctx, canvas.width * 3 + 15, 175, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 200, 175, canvas.height - this.statusBar.sizeY - 175),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 200, 175, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 275, 215, canvas.height - this.statusBar.sizeY - 215),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 275, 135, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 350, 255, canvas.height - this.statusBar.sizeY - 255),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 350, 95, 0),

      new Obstacle(canvas, this.ctx, canvas.width * 4 + 200, 255, canvas.height - this.statusBar.sizeY - 255),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 200, 95, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 275, 215, canvas.height - this.statusBar.sizeY - 215),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 275, 135, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 350, 175, canvas.height - this.statusBar.sizeY - 175),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 350, 175, 0),
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
  this.elements.obstacles.forEach(function(obstacle) {
    obstacle.update();
    if(this.elements.player.hasCollidedWithObstacle(obstacle)) {
      console.log("collided!");
      obstacle.destroy();
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