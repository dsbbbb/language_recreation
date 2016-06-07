/*
 * @name Iteration
 * @description Iteration with a "for" structure to construct repetitive forms.
 */
var y;
var num = 13;
var c;
var bg;
function setup() {
// bg = loadImage("assets/artBoard.jpg");
  c = createCanvas(200, 200);
  c.position(windowHeight/2, windowWidth/2);
  
  
  // noStroke();
  // stroke(255, 255, 248);
  // noLoop();
}
     

function draw() {
  // drawCircle(width/2, 280, 6);
  // background(bg);
  //   push();
  // translate(width*0.2, height*0.5);
  // rotate(frameCount / 200.0);
  // polygon(0, 0, 82, 3); 
  // pop();
    push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
    
  
  fill(150, 45, 43);
  polygon(0, 0, 80, 20); 
  pop();
  
  // push();
  // translate(width*0.8, height*0.5);
  // rotate(frameCount / -100.0);
  // polygon(0, 0, 70, 7); 
  // pop();
}
  
   // Thin lines
//   y = 45;
//   fill(254, 252, 162);
//   for(var i = 0; i < num-1; i++) {
//     rect(120, y, 40, 1);
//     rect(120, y+5, 40, 1);
//     translate(width/2, height/2);
// rotate(PI/3.0);
// rect(26, 26, 52, 52);
//     y+= 20;
//   }
  
//     // Gray bars
//   fill(51);
//   y = 40;
//   for(var i = 0; i < num; i++) {
//     rect(405, y, 20, 5);
//     y += 20;
//   }
  
//   y = 50;
//   for(var i = 0; i < num; i++) {
//     rect(425, y, 30, 3);
//     y += 20;
//   }




function drawCircle(x, radius, level) {                    
  var tt = 30 * level/4.0;
  // fill(tt/PI, 151, tt*PI);
  fill(tt+50, tt+45, tt+43);
  // rect(x, height/2, radius*2, radius*2);      
  // ellipse(x, height/2, radius*2, radius*2);      
  ellipse(x, height/2, radius*2, radius*2);      
  if(level > 1) {
    level = level - 1;
    drawCircle(x - radius/2, radius/2, level);
    drawCircle(x + radius/2, radius/2, level);
  }
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}




    

