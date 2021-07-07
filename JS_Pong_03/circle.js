"use strict";
/**
 *
 *  Circle class:  Inherits Shape, draws a circle
 *
 *
 */

class Circle extends Shape {
    constructor(x, y, size, dx, dy, name) {
        super(x, y, size, dx, dy, name);
    }
}

Circle.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
    //console.log('x, y=' + this.x + ' , ' + this.y);
};
