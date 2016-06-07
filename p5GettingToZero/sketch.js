/*
 * @name Slider
 * @description You will need to include the 
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * for this example to work in your own project.<br><br>
 * Move the sliders to control the R, G, B values of the background.
 */
var slider;
var total;
var totalNonViolent;
 var total = 52518;

// var totalRadius = d3.round(52518/300);
function setup() {
 
  var totalNonViolent = round(total * .47);
  console.log(totalNonViolent);
    // create canvas
  createCanvas(800, 800);
  
  // noLoop();
  
  

  // create sliders
  slider = createSlider(1, 99, 50);
  slider.position(180, 250);
   slider.style('width', '80px');
   slider.style('color', 'blue');

}

function draw() {
  var totalNonViolent = round(total * .47);
  var r = .01 * slider.value();
  // console.log(r);
  // console.log(totalNonViolent);
  var zero = d3.format(",");
  var updatedNonViolent= totalNonViolent * r;
var updatedTotal = round(total - updatedNonViolent);
  var peopleLeft = zero(updatedTotal);
  background(33, 33, 33);
  textSize(22);
  fill(3, 169, 244);
  textFont("font-family: 'Fira Sans', sans-serif");
  fill(255, 255, 255);
  text("If we released " + slider.value() + " percent of non violent offenders, it would reduce the imprisoned number of humans to " + peopleLeft, 50, 0, 500, 150);
  fill(255, 160, 0)
  ellipse(350, 350, updatedTotal/150 , updatedTotal/150 );
  // console.log(updatedTotal);
  // console.log(updatedTotal);
}