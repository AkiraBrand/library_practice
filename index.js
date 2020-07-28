//variables 
var title = "The Bible";
var pages = 4000;
var pages = (pages/4);
var movie = undefined;
var sequel = `${title} 2: the sequel`;
var isFavorite = true; 
var isShortStory = pages < 25;

//conditionals
if (pages < 1000) {
  console.log("I could read that in a day!");
} else {
  console.log("Ok, maybe I could read that in a day and a half");
};

if (isFavorite === true) {
  console.log(`My favorite book is ${title}.`);
} else {
  console.log(`I recently read ${title}.`);
};

//arrays
var books = ["The Bible", "On Writing", "The Shining", "A Wild Sheep Chase", "The Wisdom of Uncertainty"];
var thirdBook = books[2];

var belowTwoHundred = [23, 76, 167, 0.1, -5, 1, 32, 12, 87.8, 10, 13, 98];
var fifthElement = belowTwoHundred[4];
console.log(fifthElement);

//


