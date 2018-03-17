let rows, x_float;
let cols, y_float;

function setup() {
	createCanvas( windowWidth, windowHeight );
	frameRate( 10 );

	x_float = 50;
	rows = floor( width / x_float );
	y_float = 50;
	cols = floor( height / y_float );
}



function draw() {
	background( 'white' );

	noStroke();

	// ‘x’ is a dummy value.
	let x = 1;
	let y = 1;
	while ( x != 0 ){
		x = floor(random() * rows);
		y = floor(random() * cols);

		fill( random(230,255,), random(230,255,), random(230,255,) );
		ellipse( x*x_float, y*y_float, random(400, 700) );

   }

  }
