"use strict";
/**
 *  init()  Called from HTML to set up game, sets up key handler, timer
 *
 *  doKeyDown()  handles key strokes
 *
 *  game_loop()  run by timer, updates screen and game
 *
 */

// bind these to the html
var canvas;


// the screen context, thing you draw on
var ctx;

// the shapes ... size is random

var mario1 = new Mario(400, 500, 30, 1, -1, 'Mario1');
var mario2 = new Mario(400, 500, 60, -1, 1, 'Mario2');

var p1;
var p2;
var p3

// Array of all our shapes
const shapeArray = [mario1, mario2];

var timer;       // timer object
var point = false; // flag to point game (press "point")
var points1 = 0; // Player 1 points
var points2 = 0; // player 2


function init() {
    // https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    // set up callback to run function keydown when a key is pressed
    window.addEventListener("keydown", doKeyDown, false);
    // https://www.w3schools.com/jsref/event_onmousemove.asp
    window.addEventListener("mousemove", doMouseMove, false);

    // get these named items by thier ID in index2.html
    //barImg = document.getElementById("bar");
    canvas = document.getElementById("canvas");

    // padels created after canvas, to adjust for canvas size
    p1 = new Padel(0, canvas.height - 300, 100, 'P1', canvas.height - 100, canvas.height - 50);
    p2 = new Padel(200, 550, 300, 'P2', 0, 50);
    p3 = new Padel(900, canvas.height - 300, 100, 'P1', canvas.height - 100, canvas.height - 50);
    // get the part of the screen to draw on
    ctx = canvas.getContext("2d");

    // set the timing of the timer interval, call game_loop at that interval
    timer = setInterval(game_loop, 10);

    console.log('init() done');

    // return the timer object
    return timer;

}

function doKeyDown(e) {
    // e.keyCode is the key the user pressed
    switch (e.keyCode) {
        case 65:  // =a
            p2.move_left();
            break;
        case 83:  // =s
            p2.move_right();
            break;
        case 35:  // =point
            point = true;  // set game to point
            break;
        case 36:  // =home
            circle.reset();
            square.reset();
            break;
        case 37:  // =left
            p1.move_left();
            break;
        case 38:  // =up
            circle.slowDownY();
            square.slowDownY();
            break;
        case 39:  // =right
            p1.move_right();
            break;
        case 40:  // =down
            circle.speedUpY();
            square.speedUpY();
            break;
    }
}

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove_html
function doMouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "(" + x + "," + y + ")";
    document.getElementById("logOutput").innerHTML = coor;

    // move paddle according to mouse
    if (x<300) {p2.move_left();}
    if (x>700) {p2.move_right();}
}


function game_loop() {
    // the background rectangle of the play ar<400>a.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    // draw the padels
    p1.draw(ctx);
    p2.draw(ctx);
    p3.draw(ctx);
    // loop through all shapes in the array
    shapeArray.forEach(function (shape) {
        // draw each shape
        shape.draw(ctx);

        // check if the shape hit a padel
        p1.padel_hit(shape);  // hitting padel changes direction (doesn't move)
        p2.padel_hit(shape);

        // check hitting boundaries of the canvas
        shape.canvas_hit(canvas);  // hit borders

        // move the shape in direction (changed by hitting padel or boundary)
        shape.move();

        // is the shape past a padel?  points for other player
        point = p1.past_padel(shape);
        if (point) {
            points2 = points2 + 1;
        }

        point = p2.past_padel(shape);
        if (point) {
            points1 = points1 + 1;
        }

        // show points in console
        //console.log('Points1:' + points1 +'  Points2:' + points2);

        if (points1 > 1000)  {
            document.getElementById("winner").textContent = "Winner: Player 1";
        }

        if (points2 > 1000) {
            document.getElementById("winner").textContent = "Winner: Player 2";
        }

    });
    document.getElementById("player1").textContent = points1;
    document.getElementById("player2").textContent = points2;

    //console.log('game_loop() done');
}


