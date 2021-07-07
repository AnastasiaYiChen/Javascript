"use strict";
/**
 *
 *  Shape class:  base functionality for all shapes.
 *
 *
 */

class Shape {
    constructor(x, y, size, dx, dy, name) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
        this.dy = dy;
        this.name = name;

        console.log("Shape() done for " + this.name);
    }
}

Shape.prototype.reset = function () {
    this.dx = 1;
    this.dy = -1;
};

Shape.prototype.speedUpX = function () {
    this.dx = this.dx + 1;
};

Shape.prototype.speedUpY = function () {
    this.dy = this.dy + 1;
};

Shape.prototype.slowDownX = function () {
    this.dx = this.dx - 1;
};

Shape.prototype.slowDownY = function () {
    this.dy = this.dy - 1;
};

// if hit the edge of canvas, change shape direction to bounce back in
Shape.prototype.canvas_hit = function (canvas) {
    // Check x out of range
    if ((this.x + this.dx < 0) || ((this.x + this.dx) > canvas.width))
        this.dx = -this.dx;  // bounce back in

    //Check y out of range
    if ((this.y + this.dy < 0) || ((this.y + this.dy) > canvas.height))
        this.dy = -this.dy;  // bounce back in

    //console.log('canvas_move() done for ' + this.name);
};

// move shape "forward" which is the dx, dy direction.
Shape.prototype.move = function () {
    // now canvas_move per the delta values
    this.x += this.dx;
    this.y += this.dy;

    //console.log('canvas_move() done for ' + this.name);
};


