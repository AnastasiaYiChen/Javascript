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


function unit_test() {
    // set up callback to run function keydown when a key is pressed
    //window.addEventListener("keydown", doKeyDown, false);

    // get these named items by thier ID in index2.html
    canvas = document.getElementById("canvas");

    // get the part of the screen to draw on
    ctx = canvas.getContext("2d");

    // set the timing of the timer interval, call draw_screen at that interval
    //timer = setInterval(draw_screen, 10);

    // return the timer object
    //return timer;

    // this line is after the return, and so never gets executed
    console.log('Start unit tests...');
    console.log('Show values used in testing:');
    console.log('canvas.width=' + canvas.width + '   canvas.height=' + canvas.height);
    var test_shape;
    var test_padel;
    var result;

    ///////////////////////////////////////////
    ///////////////////////////////////////////
    //////////   Misses    ////////////////////
    ///////////////////////////////////////////
    // make shapes NOT in the "past-padel" range ...y is 2nd param
    test_shape = new Circle(400, 170, Math.random() * 30, -1, 1, 'Sam');

    // last 2 ints of padel are start-end of "past-padel" range, so a
    // shape in that range should return true...past the padel
    test_padel = new Padel(200, 500, 100, 'P1', 550, 600);

    result = test_padel.past_padel(test_shape);
    // test_padel.draw(ctx);
    // test_shape.draw(ctx);
    console.log('test F1... Shape.y=' + test_shape.y +
        " padel start=" + test_padel.y_miss_start +
        " end=" + test_padel.y_miss_end +
        " in range=" + result);
    if (result === true) {
        console.log('fail: XXXXXXXXXXXXXXXXXXXX');
    } else {
        console.log('pass: --------------------');


        // another miss
        test_shape = new Circle(400, 270, Math.random() * 30, -1, 1, 'Sam');
        test_padel = new Padel(200, 500, 100, 'P1', 550, 600);
        result = test_padel.past_padel(test_shape);
        // test_padel.draw(ctx);
        // test_shape.draw(ctx);
        console.log('test F2... Shape.y=' + test_shape.y +
            " padel start=" + test_padel.y_miss_start +
            " end=" + test_padel.y_miss_end +
            " in range=" + result);
        if (result === true) {
            console.log('fail: XXXXXXXXXXXXXXXXXXXX');
        } else {
            console.log('pass: --------------------');
        }


        // just outside
        test_shape = new Circle(400, 549, Math.random() * 30, -1, 1, 'Sam');
        test_padel = new Padel(200, 500, 100, 'P1', 550, 600);
        result = test_padel.past_padel(test_shape);
        // test_padel.draw(ctx);
        // test_shape.draw(ctx);
        console.log('test F3... Shape.y=' + test_shape.y +
            " padel start=" + test_padel.y_miss_start +
            " end=" + test_padel.y_miss_end +
            " in range=" + result);
        if (result === true) {
            console.log('fail: XXXXXXXXXXXXXXXXXXXX');
        } else {
            console.log('pass: --------------------');
        }




        ///////////////////////////////////////////
        ///////////////////////////////////////////
        //////////   HITS      ////////////////////
        ///////////////////////////////////////////
        // make shapes IN the "past-padel" range ...y is 2nd param
        test_shape = new Circle(400, 560, Math.random() * 30, -1, 1, 'Sam');
        test_padel = new Padel(200, 500, 100, 'P1', 550, 600);
        result = test_padel.past_padel(test_shape);
        // test_padel.draw(ctx);
        // test_shape.draw(ctx);
        console.log('test T1... Shape.y=' + test_shape.y +
            " padel start=" + test_padel.y_miss_start +
            " end=" + test_padel.y_miss_end +
            " in range=" + result);
        if (result === true) {
            console.log('pass: --------------------');
        } else {
            console.log('fail: XXXXXXXXXXXXXXXXXXXX');
        }

        // just inside
        test_shape = new Circle(400, 551, Math.random() * 30, -1, 1, 'Sam');
        test_padel = new Padel(200, 500, 100, 'P1', 550, 600);
        result = test_padel.past_padel(test_shape);
        test_padel.draw(ctx);
        test_shape.draw(ctx);
        console.log('test T1... Shape.y=' + test_shape.y +
            " padel start=" + test_padel.y_miss_start +
            " end=" + test_padel.y_miss_end +
            " in range=" + result);
        if (result === true) {
            console.log('pass: --------------------');
        } else {
            console.log('fail: XXXXXXXXXXXXXXXXXXXX');
        }

    }
}
