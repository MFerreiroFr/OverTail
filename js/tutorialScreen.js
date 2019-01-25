function TutorialScreen(name, canvas, changeScreen) {
  GameScreen.call(this, name, canvas, changeScreen);

  this.elements = {
    player: new Player(this.canvas, this.ctx, this.statusBar.sizeY),
    obstacles: [   
      new TextObstacle(canvas, this.ctx,canvas.width, 0, 50, "Press the arrows to"),
      new TextObstacle(canvas, this.ctx,canvas.width, 0, 75, "avoid bones"),
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
      new Obstacle(canvas, this.ctx, canvas.width * 7 + 150, 400, 0, 3.7, 3),
  
      new TextObstacle(canvas, this.ctx,canvas.width * 8, 0, 50, "Don't move!"),
      new BlueObstacle(canvas, this.ctx, canvas.width * 8 + 150, 400, 0, 3.7, 1),
      new TextObstacle(canvas, this.ctx,canvas.width * 9, 0, 50, "Try not to get hit \u2764"),
      new TextObstacle(canvas, this.ctx,canvas.width * 10 + 120, 0, 50, "Are you ready to show your"),
      new TextObstacle(canvas, this.ctx,canvas.width * 10 + 120, 0, 75, "DETERMINATION?"),
      new TextObstacle(canvas, this.ctx,canvas.width * 11 + 300, 0, 50, "Go up or down"),
      new TextObstacle(canvas, this.ctx,canvas.width * 11 + 300, 0, 75, "to make a decision"),
      new TextObstacle(canvas, this.ctx,canvas.width * 12 + 250, 0, 50, "I was born ready \u21e8"),
      new TextObstacle(canvas, this.ctx,canvas.width * 12 + 250, 0, 300, "I need more time \u21e8"),
      new EndObstacle(canvas, this.ctx, canvas.width * 13, 199, 0, "next"),
      new EndObstacle(canvas, this.ctx, canvas.width * 13 + 50, 195, canvas.height - this.statusBar.sizeY - 197),
    ]
  }
  this.levelLength = this.elements.obstacles.length;
}

TutorialScreen.prototype = Object.create(GameScreen.prototype);
TutorialScreen.prototype.constructor = TutorialScreen;