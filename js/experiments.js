var loadQuoteButton = document.getElementById("loadQuote");
var clickCount = 0;
var zaphod = 0;

function printQuote() {
  clickCount++;
  if (clickCount === 1) {
    singleClickTimer = setTimeout(function() {
      clickCount = 0;
      doClickAction();
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
  zaphod++;
}

function doClickAction() {
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  var colour = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = colour;
}

function doDoubleClickAction() {
  document.getElementById("dontPanic").style.display = "inline-block";
}

// loadQuoteButton.addEventListener()

