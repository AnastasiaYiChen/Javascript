"use strict";
/**
 *
 *  Square class:  Inherits Shape, draws a square
 *
 *
 */


class Square extends Shape {
    constructor(x, y, size, dx, dy, name) {
        super(x, y, size, dx, dy, name);
    }
}

Square.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = "blue";
    ctx.fill();
};

