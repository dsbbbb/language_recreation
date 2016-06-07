//read in a csv file in the same folder with data and tell d3 what to do with it
d3.csv('prisonState.csv', function(data) {

console.table(data);
var prisonDataByState = _.groupBy(data, 'state');

//ask-need to still understand how/what exactly this is doing, and how it knows to do the state name below as stateName
_.each(prisonDataByState, function(prisonData, stateName, stateNumbers){

var stateNumbers = parseFloat(prisonData[0]["total"]);


console.log(stateNumbers);

// var width =360;
// var height = 350;


var color = "hsl(199, 100%, 50%)";
var svgContainer = d3.select('#dataviz').append('svg')
.attr("width", 350)
.attr("height", 360);

var holder = svgContainer.append("circle")
  .attr("cx", 300)
  .attr("cy", 150) 
  .style("fill", "none")   
  .style("stroke", "blue") 
  .attr("r", 120);

var circs= svgContainer.append('circle')
.attr('cx', 85)
.attr('cy', 115)
// .attr('filter', 'url(#this_image)')
.attr('r', stateNumbers/2300)
.style('fill', color);

var stateText = svgContainer
.append('text')
.attr('x', 0)
.attr('y', 20)
.text(stateName + " " + stateNumbers)
.style('font-size', 20)
.style('fill', '#FEFE91');



//  // when the input range changes update the circle 
// d3.select("#nRadius").on("input", function() {
//   update(+this.value);
// });

// // Initial starting radius of the circle 
// update(120);

// // update the elements
// function update(nRadius) {

//   // adjust the text on the range slider
//   d3.select("#nRadius-value").text(nRadius);
//   d3.select("#nRadius").property("value", nRadius);

//   // update the rircle radius
//   holder.selectAll("circle") 
//     .attr("r", nRadius);
// }


});
});
// var prisonerData = _.where(data, {total: prisonDataByTotal});
// var stateData = _.where(data, {state: prisonDataByState});

//show console to see the data is loading correctly
// console.log(prisonerDataByState);
// console.table(stateData);
//  console.table(data);


//create an array to hold the data as it comes in sorted. This is what I will eventually want to pull from which would be an array of key:value pairs corresponding to the state and prison numbers.
// var prisonNumbersByState = {};
//here is the part I'm struggling with

// _.each(prisonDataByState, function(prisonDataForOneState, partySize) {
//   var peoplePrison = _.map(
//     _.pluck(prisonDataForOneState, 'total'), function(string) {
//       return Number(string);


//   });
//   });


//   prisonData= [
// {}
//   ]

//   prisonNumbersByState[prisonDataByState] = peoplePrison;
// console.log(prisonNumbersByState);






// var numericData = []



// var prisonState = {stateName: peoplePrison};

// console.table(data);
// console.log(data[0].State);
// console.log(stateName);
// console.log(peoplePrison);

// var prisonData = _.where(data,{Total:peoplePrison});
// var stateData = _.where(data,{State:stateName});


