/*
 * @name Slider
 * @description You will need to include the 
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * for this example to work in your own project.<br><br>
 * Move the sliders to control the R, G, B values of the background.
 */
var slider;
var perCent;
var totalNonViolent;
 var total = 52518;
var daWords;
var myFont;
function preload() {
  myFont = loadFont('assets/ETBembo-RomanLF.ttf');
}
// var totalRadius = d3.round(52518/300);
function setup() {
  
  // daWords = createP("IF WE RELEASED " + slider.value() + " PERCENT OF NON-VIOLENT OFFENDERS, IT WOULD REDUCE THE IMPRISONED NUMBER OF HUMANS TO " + peopleLeft, 50, 0, 500, 150);
  // daWords.position(50,50);
  var totalNonViolent = round(total * .47);
  // console.log(totalNonViolent);
    // create canvas
  createCanvas(800, 800);


  // create sliders
  slider = createSlider(1, 99, 50);
  slider.position(180, 250);
   slider.style('width', '80px');
   slider.style('color', 'blue');
  // slider.value().style('color', 'blue');

}

function draw() {
  
  var totalNonViolent = round(total * .47);
  var r = .01 * slider.value();
  // var perCent = slider.value();
  var perCent = slider.value();


  // var colorWordOne = createDiv(perCent);
  
// perCent.style('color', 'blue');
  // perCent.style('color','blue');
  // console.log(r);
  // console.log(totalNonViolent);
  var zero = d3.format(",");
  var updatedNonViolent= totalNonViolent * r;
var updatedTotal = round(total - updatedNonViolent);
  var peopleLeft = zero(updatedTotal);
  background(255, 255, 248);
fill('#111');
  textFont(myFont);
  textSize(24);
text("IF WE RELEASED ", 50, 0, 500, 150);
fill('#C34242');
text(perCent + " PERCENT ", 257, 0, 500, 150);
// + perCent + " PERCENT 50, 0, 500, 150);
//   OF NON-VIOLENT OFFENDERS, IT WOULD REDUCE THE IMPRISONED NUMBER OF HUMANS TO " + peopleLeft, 
 
  // text("IF WE RELEASED " + slider.value() + " PERCENT OF NON-VIOLENT OFFENDERS, IT WOULD REDUCE THE IMPRISONED NUMBER OF HUMANS TO " + peopleLeft, 50, 0, 500, 150);
   fill(254, 252, 162);
  ellipse(350, 350, 350 , 350 );
  fill(255, 160, 0);
 strokeWeight(4);
stroke(51);
  ellipse(350, 350, updatedTotal/150 , updatedTotal/150 );
  // console.log(updatedTotal);
  // console.log(updatedTotal);
}