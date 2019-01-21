"use strict";

function BasicScreen(name, canvas, text, buttonText, changeScreen) {
  Screen.call(this, name, canvas, changeScreen);
  
  this.elements = {
    text: {
      content: text || "start screen",
      fontSize: "24px Arial",
    },
    button: {
      x: 200,
      y: 400,
      width: 100,
      height: 50,
      content: buttonText || "start",
      font: "24px Arial",
      clicked: false
    }
     
  }
  
}

BasicScreen.prototype = Object.create(Screen.prototype);
BasicScreen.prototype.constructor = BasicScreen;

BasicScreen.prototype.draw = function() {
  this.ctx.fillStyle = "white";
  this.ctx.font = this.elements.text.fontSize;
  this.ctx.fillText(this.elements.text.content, this.canvas.width / 2, this.canvas.height / 2);

  this.ctx.strokeStyle = "white";
  this.ctx.textAlign = "center";
  this.ctx.textBaseline = "middle";
  this.ctx.strokeRect(
    this.elements.button.x, 
    this.elements.button.y,
    this.elements.button.width,
    this.elements.button.height);
  this.ctx.fillText(
    this.elements.button.content,
    this.elements.button.x + this.elements.button.width / 2,
    this.elements.button.y + this.elements.button.height / 2)
};

BasicScreen.prototype.update = function() {
  if(this.elements.button.clicked)  {
    this.changeScreen(this.name);
    this.elements.button.clicked = false;
  }
}

BasicScreen.prototype.handleClick = function() {
  var canvasPos = this.canvas.getBoundingClientRect();
  if (
    event.clientX - canvasPos.left > this.elements.button.x &&
    event.clientX - canvasPos.left < this.elements.button.x + this.elements.button.width &&
    event.clientY - canvasPos.top > this.elements.button.y &&
    event.clientY - canvasPos.top < this.elements.button.y + this.elements.button.height
    ) {
      console.log("button clicked")
      this.elements.button.clicked = true;
    }
}