"use strict";

function startGame() {
  var canvas = document.querySelector("#canvas");
  var game = new Game(canvas);

  function handleClick(event) {
    var rect = canvas.getBoundingClientRect();
    
    if(game.currentScreen instanceof BasicScreen) game.currentScreen.handleClick(); 
    // setTimeout(function() {
    //   document.querySelector("#canvas").classList.add("translated")
    // }, 4000)
  }

  function handleKeyPress(event) {
    if(game.currentScreen instanceof GameScreen) {
      switch(event.keyCode) {
        case 38:
          game.currentScreen.moveUp();
        break;
        case 40:
          game.currentScreen.moveDown();
        break;
      }
    }
  }
  
  function handleKeyRelease(event) {
    if(game.currentScreen instanceof GameScreen){
      switch(event.keyCode) {
        case 38:
        case 40:
        game.currentScreen.stopPlayer();
      }
    }
  }
  game.start();

  canvas.addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeyPress)
  document.addEventListener("keyup", handleKeyRelease)
}

document.addEventListener("load", startGame());