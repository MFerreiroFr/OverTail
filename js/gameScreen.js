"use strict";

function GameScreen(name, canvas, changeScreen) {
  Screen.call(this, name, canvas, changeScreen);

  this.statusBar = new StatusBar(this.canvas, this.ctx, 100);
  this.elements = { 
    player: new Player(this.canvas, this.ctx, this.statusBar.sizeY),
    obstacles: [   
      new TextObstacle(canvas, this.ctx,canvas.width , 0, 50, "Ready?"),
      new TextObstacle(canvas, this.ctx,canvas.width * 2 , 0, 50, "Go!"),

      new Obstacle(canvas, this.ctx, canvas.width * 3 + 30, 250, canvas.height - this.statusBar.sizeY - 250),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 210, 250, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 390, 250, canvas.height - this.statusBar.sizeY - 250),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 70, 250, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 250, 250, canvas.height - this.statusBar.sizeY - 250),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 430, 250, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 5 + 110, 250, canvas.height - this.statusBar.sizeY - 250),
      new Obstacle(canvas, this.ctx, canvas.width * 5 + 290, 250, 0),

      new Obstacle(canvas, this.ctx, canvas.width * 6 + 100, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 140, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 180, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 220, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 240, 40, canvas.height - this.statusBar.sizeY - 40),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 260, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 300, 310, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 6 + 320, 90, canvas.height - this.statusBar.sizeY - 90),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 340, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 380, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 400, 40, 310),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 420, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 6 + 460, 310, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 6 + 480, 90, canvas.height - this.statusBar.sizeY - 90),
      new Obstacle(canvas, this.ctx, canvas.width * 7, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 60, 30, 310),
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 60, 30, canvas.height - this.statusBar.sizeY - 30),
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 40, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 80, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 120, 310, 0),

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