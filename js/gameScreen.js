"use strict";

function GameScreen(name, canvas, changeScreen) {
  Screen.call(this, name, canvas, changeScreen);

  this.statusBar = new StatusBar(this.canvas, this.ctx, 100);
  this.elements = { 
    player: new Player(this.canvas, this.ctx, this.statusBar.sizeY),
    obstacles: [   
      new TextObstacle(canvas, this.ctx,canvas.width , 0, 50, "Ready?"),
      new TextObstacle(canvas, this.ctx,canvas.width * 2 , 0, 50, "Go!"),

      new Obstacle(canvas, this.ctx, canvas.width * 3 + 30, 190, canvas.height - this.statusBar.sizeY - 190),
      new Obstacle(canvas, this.ctx, canvas.width * 3 + 470, 190, 0),

      new Obstacle(canvas, this.ctx, canvas.width * 4 + 180, 180, canvas.height - this.statusBar.sizeY - 180),
      new Obstacle(canvas, this.ctx, canvas.width * 4 + 180, 180, 0),
      
      new Obstacle(canvas, this.ctx, canvas.width * 5 + 20, 200, canvas.height - this.statusBar.sizeY - 200),
      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 20, 200, 0),

      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 200, 400, 0),

      new BlueObstacle(canvas, this.ctx, canvas.width * 5 + 400, 200, canvas.height - this.statusBar.sizeY - 200),
      new Obstacle(canvas, this.ctx, canvas.width * 5 + 400, 200, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 30, 250, canvas.height - this.statusBar.sizeY - 250),
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 210, 250, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 390, 250, canvas.height - this.statusBar.sizeY - 250),
      new Obstacle(canvas, this.ctx, canvas.width * 8 + 70, 250, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 8 + 250, 250, canvas.height - this.statusBar.sizeY - 250),
      new Obstacle(canvas, this.ctx, canvas.width * 8 + 430, 250, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 9 + 110, 250, canvas.height - this.statusBar.sizeY - 250),
      new Obstacle(canvas, this.ctx, canvas.width * 9 + 290, 250, 0),

      new Obstacle(canvas, this.ctx, canvas.width * 10 + 100, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 140, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 180, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 220, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 240, 40, canvas.height - this.statusBar.sizeY - 40),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 260, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 300, 310, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 10 + 320, 90, canvas.height - this.statusBar.sizeY - 90),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 340, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 380, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 400, 40, 310),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 420, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 10 + 460, 310, 0),
      new BlueObstacle(canvas, this.ctx, canvas.width * 10 + 480, 90, canvas.height - this.statusBar.sizeY - 90),
      new Obstacle(canvas, this.ctx, canvas.width * 11, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 11 + 60, 30, 310),
      new Obstacle(canvas, this.ctx, canvas.width * 11 + 60, 30, canvas.height - this.statusBar.sizeY - 30),
      new Obstacle(canvas, this.ctx, canvas.width * 11 + 40, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 11 + 80, 310, 0),
      new Obstacle(canvas, this.ctx, canvas.width * 11 + 120, 310, 0),
      new EndObstacle(canvas, this.ctx, canvas.width * 12 + 50, 398, 0)
    ]
  }
  this.levelLength = this.elements.obstacles.length;
}

GameScreen.prototype.draw = function() {
  
  this.elements.player.draw();
  this.statusBar.draw(this.elements.obstacles.length, this.levelLength);
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
          setTimeout(function() { 
            obstacle.choice === "next" ? 
              this.changeScreen(this.name, true, true) : 
              this.changeScreen(this.name, true);
          }.bind(this), 5000);
          setTimeout(function() { 
            document.querySelector("#enemy").classList.toggle("defeated")
          },2000)
          this.canvas.classList.toggle("attack");
          obstacle.destroy();
          break;
        case 'BlueObstacle':
          if (this.elements.player.direction != 0) {
            this.elements.player.receiveDamage(obstacle.damage);
            obstacle.destroy();
          }
      }

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