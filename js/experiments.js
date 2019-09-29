var loadQuoteButton = document.getElementById("loadQuote");
var clickCount = 0;
var trinTragula = 0;
var tagChoice = "all";

function printQuote() {
  clickCount++;
  if (clickCount === 1) {
    singleClickTimer = setTimeout(function() {
      clickCount = 0;
      setBackgroundColour();
    }, 400);
  } else if (clickCount === 2) {
    clearTimeout(singleClickTimer);
    clickCount = 0;
    doDoubleClickAction();
  }
}

 

function heartOfGold() {
  var element = document.getElementById("dontPanic");
  element.innerHTML = "Please do not press this button again";
  element.style.opacity = 1;
  trinTragula++;
  if (trinTragula > 1) {
    document.body.style.backgroundColor = "#000";
    document.body.innerHTML = '<div id="totalPerspective">You are here: <ul><li></li></ul></div>';
  }
}

function setBackgroundColour() {
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  var colour = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = colour;
}

function doDoubleClickAction() {
  document.getElementById("dontPanic").style.display = "inline-block";
  document.getElementById("tagPicker").style.width = "1000px";
}

function getRandomQuote(array) {
  var i = Math.floor(Math.random() * array.length);
  return array[i];
}

function getQuoteByTag(tag) {
  var tagArray = [];
  for (var i = 0; i < quotes.length; i++) {
    if (quotes[i].tag === tag) {
      tagArray.push(quotes[i]);
    }
  }
  return tagArray;
}



