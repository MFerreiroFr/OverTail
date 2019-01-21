"use strict";

function Game(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this._changeScreen = function(name, victory = false) {
    switch(name) {
      case "start":
        this.currentScreen = this.gameScreen;
        break;
      case "game":
        this.currentScreen = victory ? this.victoryScreen : this.gameOverScreen;
        break;
      case "victory":
      case "gameOver":
        this.currentScreen = this.startScreen
    }
  }.bind(this);
  this.victoryScreen = new BasicScreen("victory", this.canvas, "You won!", "Restart", this._changeScreen);
  this.gameOverScreen = new BasicScreen("gameOver", this.canvas, "You lost!", "Restart", this._changeScreen);
  this.gameScreen = new GameScreen("game",this.canvas, this._changeScreen);
  this.startScreen = new BasicScreen("start",this.canvas, "Overtail", "Start!", this._changeScreen);
  this.currentScreen = this.startScreen;
  

  this._clearCanvas = function() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }

  this._drawCanvas = function() {
    this.currentScreen.draw();
  }

  this._updateCanvas = function() {
    this.currentScreen.update();
  }
  
}

Game.prototype.start = function() {

  function loop() {
    this._updateCanvas();
    this._clearCanvas();
    this._drawCanvas();

    window.requestAnimationFrame(loop.bind(this));
  }

  window.requestAnimationFrame(loop.bind(this));
}

