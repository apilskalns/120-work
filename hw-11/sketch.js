var cwidth = 800;
var cheight = 600;
var crate = 2;
var csize = 10;
let cgrid;

function ColorCell(){
  this.colorPSize = 255; // color pallete size
  this.r = random(this.colorPSize);
  this.g = random(this.colorPSize);
  this.b = random(this.colorPSize);
}

ColorCell.prototype.setR = function(r){
  this.r = r;
}

ColorCell.prototype.setG = function(g){
  this.g = g;
}

ColorCell.prototype.setB = function(b){
  this.g = g;
}

ColorCell.prototype.rand = function(){
  this.r = random(this.colorPSize);
  this.g = random(this.colorPSize);
  this.b = random(this.colorPSize);
}

function ColorGrid(){
  this.grid = new Array();

  this.i_lim = cheight/csize;
  this.j_lim = cwidth/csize;

  for (i=0;i<this.i_lim;i++) {
      this.grid[i] = new Array();
      for (j=0;j<this.j_lim;j++) {
        cell = new ColorCell()
        this.grid[i][j]=cell;
      }
    }
  }

ColorGrid.prototype.rand = function(){
  for (i=0;i<this.i_lim;i++) {
      for (j=0;j<this.j_lim;j++) {
        this.grid[i][j].rand();
      }
    }
}


function setup(){
 //crateing a canvas
   createCanvas(cheight, cwidth);
   background(0);
   frameRate(crate);
   cgrid = new ColorGrid();
 }

 // grid holds x and y coordinates\

 function draw(){
   grid = cgrid.grid
   for(i=0; i<grid.length; i++){
     row = grid[i];
     for(j=0; j<row.length; j++){
       drawSquare(i*csize, j*csize, csize, grid[i][j]);
     }
   }

 }



 function mousePressed(){
   //frameRate(random(5.5*2)%5);]
   csize = (csize + 10) % 95
   if(csize == 0){
     csize = 5;
   }
   cgrid.rand();

 }

function drawSquare(i,j,csize,cell) {
    fill(cell.r, cell.g, cell.b);
    rect(i, j, csize, csize);

}
