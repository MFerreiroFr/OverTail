"use strict";

function Game(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this._changeScreen = function(name, victory = false) {
    switch(name) {
      case "start":
        document.querySelector("#enemy").classList.remove("defeated");
        this.canvas.classList.remove("rotated");
        this.currentScreen = new GameScreen("game",this.canvas, this._changeScreen);
        break;
      case "game":
        this.currentScreen = victory ? 
          new BasicScreen("victory", this.canvas, "You won!", "Restart", this._changeScreen) :
          new BasicScreen("gameOver", this.canvas, "You lost!", "Restart", this._changeScreen);;
        break;
      case "victory":
      case "gameOver":
        this.currentScreen = new BasicScreen("start",this.canvas, "Overtail", "Start!", this._changeScreen);
    }
  }.bind(this);
  
  this.currentScreen = new BasicScreen("start",this.canvas, "Overtail", "Start!", this._changeScreen);
  

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

