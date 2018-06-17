var canvas_x = 600;
var canvas_y = 600;
var w = 1;
var f = 1;
var dir = 1;
var offsets = [];

function setup() {
  createCanvas(canvas_x, canvas_y);
  frameRate(f);
  for (var x = 0; x < canvas_x; ++x){
    var row = [];
    for (var y = 0; y < canvas_y; ++y){
        row[y] = 0;
    }
    offsets[x] = row;
  }
}

function draw() {
  background('white');
  var i = 0;
  for (var x = 0; x < canvas_x; ++x){
    for (var y = 0; y < canvas_y; ++y){
        if (x % 10 == 0 && y % 10 == 0){
            noStroke();
            fill(color('red'));
            rect(x, y, w + offsets[x][y], w + offsets[x][y]);
            i += 1;
        }
    }
  }
  w += (1 * dir);
  f += (1 * dir);
  frameRate(f);
  if (w == 9){
    dir = -1;
  }
  else if (w == 1) {
    dir = 1;
  }
}

function mouseClicked(){
    var cellX = 10 * floor(mouseX / 10);
    var cellY = 10 * floor(mouseY / 10);
    offsets[cellX][cellY] += 1; 
    return false;
}
