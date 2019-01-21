"use strict";
function Screen(name, canvas, changeScreen) {
  this.name = name;
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.changeScreen = changeScreen;
}