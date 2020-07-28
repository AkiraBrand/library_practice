var title = "The Bible";
var pages = 4000;
var pages = (pages/4);
var movie = undefined;
var sequel = `${title} 2: the sequel`;
var isFavorite = true; 
var isShortStory = pages < 25;

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
