# Project's name

Overtail
## Description
Canvas game heavily influenced by the game Undertale.

In this game, the character's soul (represented by a heart) needs to avoid being captured by a couple of skeletons. To do that, it must dodge the things they throw at it (mostly bones, because skeletons) until the skeletons get tired.

Colliding with an object will make you lose a life.
The defeat condition is to lose all your lives.


## MVP (DOM - CANVAS)

Game will be made using Canvas

The first deliverable will be a playable version of a simple level with 1 type of obstacle.



## Backlog

- Music.
- Start screen visual tweaks
- Cool transitions between screens
- Mid-level transition
- Death animation.
- Stay still / move enemy mechanics
- Change lives for HP.
- Hard level.
- Absurd remarks from skeletons

## Data structure

### Game
```
Game(canvas) {
  // Properties:
  this.startScreen = new BasicScreen()
  this.gameScreen = new GameScreen()
  this.gameOverScreen = new BasicScreen();
  this.victoryScreen = new BasicScreen();
  this.ctx = canvas.getContext("2d");
  this.currentScreen = this.StartScreen;

  this._clearCanvas();
  this._drawCanvas() {
    this.currentScreen.draw();
  };

  this._updateGame() {
    this.currentScreen.update();
    }
  };

  this._changeScreen(newScreen) {
    this.currentScreen = newScreen;
  }
}

Game.prototype.startLoop = function() {

  function loop() {
    this._updateGame();
    this._clearCanvas();
    this._drawCanvas();

    window.requestAnimationFrame(loop.bind(this));
  }

  window.requestAnimationFrame(loop.bind(this));
}

```

### Screen

```
Screen(name, canvas, callback = _changeScreen){
  this.name = name;
  this.canvas = canvas;
  this.ctx;
  this.changeScreen = callback;

}

```

### BasicScreen
```
BasicScreen (name,canvas, text, buttonText, changeScreen) {
  Screen.call(this, name, canvas)
  this.elements = {
    text: {
      content: text,
      font:
    }
    button: {
      x:
      y:
      width:
      height:
      clicked: false
    }
  }
}

// Inherit methods
StartScreen.prototype = Object.create(Screen.prototype);
StartScreen.prototype.constructor = Screen;

//set transition condition to true
StartScreen.prototype.onClickStartButton() 

//Define specific condition for StartScreen to move to GameScreen
StartScreen.prototype.transitionConditionIsMet() 
```
### GameScreen
```
GameScreen(canvas, nextScreen) {
  Screen.call(this, canvas, nextScreen);
  this.elements = {
    player: New Player()
    Obstacles: [New obstacle()]
  }
}
// Inherit methods
GameScreen.prototype = Object.create(Screen.prototype);
GameScreen.prototype.constructor = Screen;

GameScreen.prototype.draw() {
  this.elements.player.draw();
  this.elements.obstacles.draw();
}

GameScreen.prototype.update() {
  this.elements.player.update();
  
  // filter the elements still relevant, and print them
  this.elements.obstacles.update(); 


  //Check if there's been a collision. If there was, player receives damage and obstacle is changed to become non-relevant

  if (this.element.player.checkIfCollided())     
    this.element.player.receiveDamage()
    this.element.obstacle[].disappear();
  if (this.transitionConditionisMet()) 
    this._changeScreen()
}

GameScreen.prototype.transitionConditionIsMet() {
  return this.elements.player.lives === 0;
}
```
### Player

```
Player(canvas) {
  this.x = 20;
  this.y = 0;
  this.lives = 3;
  this.direction = 0;
  this.canvas = canvas;
  this.speed;
  this.image;
  this.image.src;
  this.ctx;
}

Player.prototype.draw()

Player.prototype.update(); // change position taking into account canvas boundaries

Player.prototype.loseLife();

Player.prototype.setDirection();
```
### Obstacle

```
Obstacle(canvas) {
  this.x;
  this.y;
  this.speed;
  this.image;
  this.image.src;
  this.canvas;
  this.ctx;
}

Obstacle.prototype.draw();

Obstacle.prototype.update();

Obstacle.prototype.isRelevant(); // decides if the object should disappear
```

## States y States Transitions
Definition of the different states and their transition (transition functions)

All screens have a transition function named ```_changeScreen() ``` that sets the current screen of the game to a new one so it can be rendered.


## Task
 - Create basic file structure
 - Create canvas in html
 - Create main js file
 - Create Start screen basic elements
 - Create GameOver screen basic elements
 - Create Victory screen basic elements
 - Create transition between GameOver / victory screens and Start screen
 - Create transition between Start screen and placeholder of Game Screen
 - Put Player in game screen
 - Enable Player movement
 - Put an obstacle in game screen
 - Move obstacle
 - Put several moving obstacles in screen
 - Check collisions
 - Lose lives when colliding
 - Transition between Game screen and Gameover screen





## Links


### Trello
[Google Kanban](https://drive.google.com/file/d/1cr7T__CzF42Yzu9v8YCAvM10EAown-p4/view?usp=sharing)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
