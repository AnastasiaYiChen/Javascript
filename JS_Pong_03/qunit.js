// Yi Chen unit test

// padel test

var test_shape = new Circle(40, 1, Math.random() * 0, -1, 1, 'Sam');
var test_padel = new Padel(20, 50, 10, 'P2', 5, 600);
var result = test_padel.past_padel(test_shape);

test_shape = new Circle(30, 2, Math.random() * 0, -1, 1, 'Sam');
test_padel = new Padel(20, 50, 10, 'P3', 5, 600);
var result2 = test_padel.past_padel(test_shape);

test_shape = new Circle(0, 2, Math.random() * 1, -1, 1, 'Sam');
test_padel = new Padel(20, 50, 10, 'P1', 4, 100);
var result3 = test_padel.past_padel(test_shape);

test_shape = new Circle(0, 2, Math.random() * 1, -1, 1, 'Sam');
test_padel = new Padel(10, 45, 9, 'P1', 4, 100);
var result4 = test_padel.past_padel(test_shape);

test_shape = new Circle(0, 2, Math.random() * 1, -1, 1, 'Sam');
test_padel = new Padel(9, 100, 40, 'P1', 4, 100);
var result5 = test_padel.past_padel(test_shape);





QUnit.test( "hello padel test", function( assert ) {
    assert.ok( result == false, "Passed!" );
    assert.ok( result2 == false, "Passed!" );
    assert.ok( result3 == false, "Passed!" );
    assert.ok( result4 == false, "Passed!" );
    assert.ok( result5 == false, "Passed!" );

});