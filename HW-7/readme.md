Ariyana Pilskalns

[Live Sketch Link]()


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing


line 3: let ball defines a object within the module, it's not global. This means ball is only defined with this one module.

line 4 defines an attribute of the ball object -- namely it's width
line 5 and 6 defines the ball objects x and y position on the canvas
line 7 and 8 define how far two move the ball from it's current position in the x and y direction
line 9 and 10  change how fast the ball moves in the x and y direction (it's used as a multiplier to the delta_x and delta_y)

line 12 defines the setup() function which get's called when you define your sketch -- it kicks off the entire process
line 13 creates a canvas and defines the size
line 14 sets the background color of the canvas

line 19 is draw function which get's called by default 30 times per second -- it redraws the canvas to annimate the ball moving
line 21 and 22 changes the ball location by adding the deltas times the scale to the x and y values of the ball
line 25 constrains the ball using a conditional check to see if the ball is outside of the canvas bounds, if it is outside it reverses the direction by simply changing the detla to the opposite direction by multiplying the delta by -1 (note each time you multily by -1 it flips the sign of the additive/sutractive delta)
line 28 does the same thing as line 25 but for the y direction -- it does a boundary check and the reverses the additive delta

line 32 fills in the ellipse with white with a default stroke

line 33 actually creates the drawing of the ball object using the variables we defined at the top of the module

line 36 the mousePressed() function gets called each time you click on the mouse button
ine 37 and 38 uses the input of the coordinates from the mouse press for both x and y and uses it to change the multiplier x and y scale which in turn changes the speed using the map function (the map function maps one value range, namely the 0 to width value range, to a new one between .5 to 10
So every time you click it either speeds up or slows down based on where you click -- it seems random but it's not



## How did you alter the sketch?


I added 3 new variables to define a color for the Ball
I then changed these variables and the ball size with each mouse click to a random bounded size and color
