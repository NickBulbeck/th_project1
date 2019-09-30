

function printQuote() {
  clickTracker++;
  if (clickTracker === 1) {
    singleClickTimer = setTimeout(function() {
      clickTracker = 0;
      clearInterval(autoQuoteTimer);
      renderQuoteToBrowser();
      autoQuoteTimer = setInterval(renderQuoteToBrowser,10000);
    }, 400);
  } else if (clickTracker === 2) {
    clearTimeout(singleClickTimer);
    clickTracker = 0;
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



function setBackgroundColour() {
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  var colour = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = colour;
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


