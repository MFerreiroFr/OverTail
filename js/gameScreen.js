"use strict";

function GameScreen(name, canvas, changeScreen) {
  Screen.call(this, name, canvas, changeScreen);

  this.statusBar = new StatusBar(this.canvas, this.ctx, 100);
  this.elements = { 
    player: new Player(this.canvas, this.ctx, this.statusBar.sizeY),
    obstacles: [
      new TextObstacle(canvas, this.ctx,canvas.width, 0, 50, "Press the arrows to"),
      new TextObstacle(canvas, this.ctx,canvas.width, 0, 75, "avoid obstacles"),
      new Obstacle(canvas, this.ctx, canvas.width * 2 + 15, 250, 0),

      new Obstacle(canvas, this.ctx, canvas.width * 3 + 15, 160, canvas.height - this.statusBar.sizeY - 160),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 15, 160, 0),
      new TextObstacle(canvas, this.ctx,canvas.width * 3 + 110, 0, 50, "Up"),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 200, 160, canvas.height - this.statusBar.sizeY - 160),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 200, 160, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 275, 200, canvas.height - this.statusBar.sizeY - 200),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 275, 120, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 350, 240, canvas.height - this.statusBar.sizeY - 240),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 350, 80, 0),

      new TextObstacle(canvas, this.ctx,canvas.width * 4 + 70, 0, 50, "Down"),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 200, 240, canvas.height - this.statusBar.sizeY - 240),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 200, 80, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 275, 200, canvas.height - this.statusBar.sizeY - 200),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 275, 120, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 350, 160, canvas.height - this.statusBar.sizeY - 160),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 350, 160, 0),

      new TextObstacle(canvas, this.ctx,canvas.width * 5 + 70, 0, 50, "Uuuup"),
      new Obstacle(canvas, this.ctx, canvas.width * 5 + 300, 340, canvas.height - this.statusBar.sizeY - 340),
      new TextObstacle(canvas, this.ctx,canvas.width * 6, 0, 50, "Dooown"),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 150, 340, 0),

      new TextObstacle(canvas, this.ctx,canvas.width * 7, 0, 50, "Careful!"),
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 150, 400, 0, 4),

      new TextObstacle(canvas, this.ctx,canvas.width * 8, 0, 50, "Don't get hit"),
      new TextObstacle(canvas, this.ctx,canvas.width * 9, 0, 50, "You are ready now"),
      new TextObstacle(canvas, this.ctx,canvas.width * 9, 0, 75, "Good luck!"),
      new EndObstacle(canvas, this.ctx, canvas.width * 9 + 150, 398, 0)
    ]
  }
}

GameScreen.prototype.draw = function() {
  this.elements.player.draw();
  this.statusBar.draw();
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
      this.elements.player.receiveDamage(obstacle.damage);
      if(obstacle instanceof EndObstacle) this.changeScreen(this.name, true)
      obstacle.destroy();
      this.statusBar.update(this.elements.player.hp);
      if(this.elements.player.hp <= 0) this.changeScreen(this.name)
      
    }
  }.bind(this));
  
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