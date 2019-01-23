"use strict";

function GameScreen(name, canvas, changeScreen) {
  Screen.call(this, name, canvas, changeScreen);

  this.statusBar = new StatusBar(this.canvas, this.ctx, 100);
  this.elements = { 
    player: new Player(this.canvas, this.ctx, this.statusBar.sizeY),
    obstacles: [
      new TextObstacle(canvas, this.ctx,canvas.width, 0, 50, "Ready?"),
      new TextObstacle(canvas, this.ctx,canvas.width * 2, 0, 50, "Go!"),

      new Obstacle(canvas, this.ctx, canvas.width * 4 + 45, 40, canvas.height - this.statusBar.sizeY - 40),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 75, 90, canvas.height - this.statusBar.sizeY - 90),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 105, 150, canvas.height - this.statusBar.sizeY - 150),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 135, 210, canvas.height - this.statusBar.sizeY - 210),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 165, 260, canvas.height - this.statusBar.sizeY - 260),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 195, 310, canvas.height - this.statusBar.sizeY - 310),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 225, 360, canvas.height - this.statusBar.sizeY - 360),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 255, 360, canvas.height - this.statusBar.sizeY - 360),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 285, 360, canvas.height - this.statusBar.sizeY - 360),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 315, 310, canvas.height - this.statusBar.sizeY - 310),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 345, 260, canvas.height - this.statusBar.sizeY - 260),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 375, 210, canvas.height - this.statusBar.sizeY - 210),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 405, 150, canvas.height - this.statusBar.sizeY - 150),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 435, 90, canvas.height - this.statusBar.sizeY - 90),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 465, 40, canvas.height - this.statusBar.sizeY - 40),

      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 45, 40, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 75, 90, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 105, 150, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 135, 210, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 165, 260, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 195, 310, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 225, 360, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 255, 360, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 285, 360, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 315, 310, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 345, 260, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 375, 210, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 405, 150, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 435, 90, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 465, 40, 0),
      

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
      switch(obstacle.constructor.name) {
        case 'Obstacle':
          this.elements.player.receiveDamage(obstacle.damage);
          obstacle.destroy();
          break;
        case 'EndObstacle':
          this.changeScreen(this.name, true);
          break;
        case 'BlueObstacle':
          if (this.elements.player.direction != 0) {
            this.elements.player.receiveDamage(obstacle.damage);
            obstacle.destroy();
          }
      }

      

      if(obstacle instanceof EndObstacle) this.changeScreen(this.name, true)
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