"use strict";

/**
 *
 *  Mario class:  Inherits Shape, draws a square
 *
 *
 */


class Mario extends Shape {
    constructor(x, y, size, dx, dy, name) {
        super(x, y, size, dx, dy, name);
        this.ddx = 0;
        this.ddy = -.3;
    }
}

// https://www.w3schools.com/tags/canvas_drawimage.asp
var marioImage = new Image();   // Create new img element
marioImage.src = 'Cinderella.png'; // Set source path

Mario.prototype.draw = function (ctx) {
    const marioImg = document.getElementById('mario');
    ctx.drawImage(marioImage, this.x, this.y, this.size, this.size);

    // make mario fall
    this.dx = this.dx + this.ddx;
    this.dy = this.dy + this.ddy;

    // max dy to limit max speed of fall
    if (this.dy>60){this.dy=60;}
    if (this.dy<-60){this.dy=-60;}

};

