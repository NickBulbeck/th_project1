var loadQuoteButton = document.getElementById("loadQuote");
var clickCount = 0;
var trinTragula = 0;
var workingArray = quotes;
var currentQuote = null;

function printQuote() {
  clickCount++;
  if (clickCount === 1) {
    singleClickTimer = setTimeout(function() {
      clickCount = 0;
      renderQuoteToBrowser();
    }, 400);
  } else if (clickCount === 2) {
    clearTimeout(singleClickTimer);
    clickCount = 0;
    zarniwoop();
  }
}

function setTagToHumour() {
  workingArray = getQuotesByTag("humour");
} 

function setTagToScience() {
  workingArray = getQuotesByTag("science");
} 

function setTagToFake() {
  workingArray = getQuotesByTag("fake");
} 

function setTagToAny() {
  workingArray = quotes;
}

function heartOfGold() {
  document.getElementById("dontPanic").innerHTML = "Please do not press this button again";
  document.getElementById("tagPicker").style.width = "1100px";
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

function zarniwoop() {
  document.getElementById("dontPanic").style.display = "inline-block";
  document.getElementById("tagPicker").style.width = "1000px";
}

function getRandomQuote(array) {
  var i = Math.floor(Math.random() * array.length);
  return array[i];
}

function getQuotesByTag(tag) {
  var tagArray = [];
  for (var i = 0; i < quotes.length; i++) {
    if (quotes[i].tag === tag) {
      tagArray.push(quotes[i]);
    }
  }
  return tagArray;
}

function newQuoteToHTML(quoteItem) {
  var html = '<p class = "quote">' + quoteItem.quote + '</p>' +
             '<p class = "source">' + quoteItem.source;
  if (quoteItem.citation) {
    html += '<span class="citation">' + quoteItem.citation + '</span>';
  }
  if (quoteItem.year) {
    html += '<span class="year">' + quoteItem.year + '</span>';
  }
  html += '</p>'
  return html;
}

function renderQuoteToBrowser() {
  setBackgroundColour();
  var newQuote = null;
  do {
    newQuote = getRandomQuote(workingArray);
  } while (newQuote === currentQuote);
  var html = newQuoteToHTML(newQuote);
  document.getElementById("quote-box").innerHTML = html;
  currentQuote = newQuote;
}


