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

function heartOfGold() {
  var element = document.getElementById("dontPanic");
  element.innerHTML = "Please do not press this button again";
  element.style.opacity = 1;

}

function doClickAction() {
  console.log("Single-click");
}

function doDoubleClickAction() {
  document.getElementById("dontPanic").style.display = "inline-block";
}

// loadQuoteButton.addEventListener()

