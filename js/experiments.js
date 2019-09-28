var loadQuoteButton = document.getElementById("loadQuote");
var clickCount = 0;

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

printQuote();

function blah() {
  return 2*3;
}

function doClickAction() {
  console.log("Single-click");
}

function doDoubleClickAction() {
  console.log("Double-clicked");
}

// loadQuoteButton.addEventListener()

