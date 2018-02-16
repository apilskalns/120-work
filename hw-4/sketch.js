function setup(){

  //creating canvas for monster portrait
  createCanvas( 600, 600 );

}

function draw(){

  //set background color
  background('rgb(119, 206, 238)');

  // *********************************** //
  // create sandbox for entire character //
  push();

  // move the entire grid to the center of the canvas
  translate( 300, 300);

  // *********************************** //
  //* BODY ***************************** //
  push();

  rotate(160)
  rect( -150, -150, 300, 300, 0, 180, 180,);

  pop();
  // *********************************** //
  //* EYES ***************************** //
  push();

  fill('rgb(0, 0, 0)')
  ellipse( -80, -40, 30, 30);

  fill('rgb(0, 0, 0)')
  ellipse( 50, -40, 30, 30);

  pop();

  // *********************************** //
  //* EYE HIGHLIGHT ******************** //
  push();
  ellipse( -80, -40, 5, 5);

  ellipse( 50, -40, 5, 5);

  // *********************************** //
  //* MOUTH **************************** //
  push();

  strokeWeight(10)
  line(-40, 10, 20 , 10);

  pop();
  // *********************************** //
  //* BLUSHIES ************************* //
  push();

  stroke('rgb(233, 129, 161)')
  fill('rgb(233, 129, 161)')
  ellipse( -100, -10 , 40, 10);

  stroke('rgb(233, 129, 161)')
  fill('rgb(233, 129, 161)')
  ellipse( 80, -10 , 40, 10);

  pop();

  // *********************************** //
  // Text for my ghostly ghoul
  push();

  textSize(50)
  text( "BOO", -280, -60 );

  line( -200,-50, -170, -40,);

  pop();

  // *********************************** //
  pop();
}
