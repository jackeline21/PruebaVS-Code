function changeColor(newColor) {
    var elem1 = document.getElementById('para');
    elem1.style.color = newColor;
 }

 function changeColor(newColor) {
    var elem = document.getElementById('main-heading');
    elem.style.color = newColor;
 }


var headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
var newHeadingText = prompt("Please provide a new heading:");
headingElement.innerHTML = newHeadingText;

// ciclo while
// let total = 0, count = 1;
//while (count <= 10) {
//total += count;
//count += 1;
//}
//console.log(total);

// Random
//var getRandomNumber = function (size) {
 //   return Math.floor(Math.random() * size);
   // };