"use strict";
/**
 *  Padel class: Inherits shape, draws padels
 *
 *  y_miss_start, y_miss_end ...is the range of shape missing padel
 */

var dxBar = 10;  // speed that bar moves

class Padel extends Shape {
    constructor(x, y, size, name, y_miss_start, y_miss_end) {
        super(x, y, size, 0, 0, name);
        console.log('Padel() ' + this.name);
        this.y_miss_start = y_miss_start;
        this.y_miss_end = y_miss_end;
    }
}

// move padel left until hits edge
Padel.prototype.move_left = function () {
    if (this.x - dxBar > 0)
        this.x = this.x - dxBar;
};

// move padel right until hits edge
Padel.prototype.move_right = function () {
    if (this.x + dxBar < canvas.width)
        this.x += dxBar;
};

// draw padel
Padel.prototype.draw = function (ctx) {
    // Draw the bar (paddle..
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, 5);  // thickness is last param
    ctx.fillStyle = "black";
    ctx.fill();
};

// change shape direction if hits padel
Shape.prototype.padel_hit = function (shape) {
    // check hitting bar (padel)
    // if below y position and in between bar start and width
    if ((shape.x > this.x) && (shape.x < this.x + this.size)){
        // inside x range, check y on both sides
        if ((shape.y + shape.size > this.y) && (shape.y - shape.size < this.y) )
            shape.dy = -shape.dy;  // hit padel, change direction
    }

};

// if shape is in Y-range return true if "in behind" this padel
// so, updates points if shape is "in behind" this padel
Padel.prototype.past_padel = function (shape) {
    // check if past the padel, per padel constructor y-range
    if ((shape.y > this.y_miss_start) && (shape.y < this.y_miss_end) ) {
        return true;
    }

    return false;  // game does not point
};