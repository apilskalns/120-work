var cwidth = 800;
var cheight = 600;
var crate = 2;
var csize = 10;
let grid = new Array();

function setup(){
 //crateing a canvas
   createCanvas(cheight, cwidth);
   background(0);
   frameRate(crate);
   randomizeColorGrid();
 }

 // grid holds x and y coordinates

 function draw(){
   for(i=0; i<grid.length; i++){
     row = grid[i];
     for(j=0; j<row.length; j++){
       drawSquare(i*csize, j*csize, csize, grid[i][j]);
     }
   }

 }

function randomizeColorGrid(){
  var i_lim = cheight/csize;
  var j_lim = cwidth/csize;

  for (i=0;i<i_lim;i++) {
     grid[i]=new Array();
     for (j=0;j<j_lim;j++) {
       c = random(255)
       rcolor = new Object();
       rcolor.r = random(255);
       rcolor.g = random(255);
       rcolor.b = random(255);
       grid[i][j]=rcolor;
     }
  }
}

 function mousePressed(){
   //frameRate(random(5.5*2)%5);]
   csize = (csize + 10) % 95
   if(csize == 0){
     csize = 5;
   }
   randomizeColorGrid();

 }

function drawSquare(i,j,csize,color_obj) {
    fill(color_obj.r, color_obj.g, color_obj.b);
    rect(i, j, csize, csize);

}
