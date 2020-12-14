/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// *********************************************
// The VARIABLES section
// *********************************************
// clickTracker: used for detecting a double-click
// workingArray: supports the ability to select quotes with a specific tag (category)
// currentQuote: used to ensure that the quote always changes when printQuote() is called
// autoQuoteTimer: used to change the quote after 10 seconds if the user does nothing

var clickTracker = 0;
var workingArray = quotes;
var currentQuote = "";
var quoteInterval = 10000;
var autoQuoteTimer = setInterval(printQuote,quoteInterval);


// *********************************************
// the FUNCTIONS section
// *********************************************

// getRandomQuote: takes in an array, and returns a single quote object from it.
// Because the user can select a specific quote-tag, this function needs to be able to
// process a generic array of quotes, and not just the main one in data.js.
function getRandomQuote(array) {
  var i = Math.floor(Math.random() * array.length);
  return array[i];
}

// setBackgroundColour: Yes, I know, that's UK spelling. Also there's an outside chance it
// could select white, or a shade unreadably close to white. We can fix that in the next
// sprint...
function setBackgroundColour() {
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  var colour = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = colour;
}

// getQuotesByTag returns an array of all quotes from the main array having the chosen tag.
function getQuotesByTag(tag) {
  var tagArray = [];
  for (var i = 0; i < quotes.length; i++) {
    if (quotes[i].tag === tag) {
      tagArray.push(quotes[i]);
    }
  }
  return tagArray;
}

// The next four functions are attached to the four buttons in the tagPicker div from index.html;
// they each call getQuotesByTag to update workingArray so that it contains the set of quotes
// chosen by the user, apart from setTagToAny which simply sets it equal to quotes:
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

// quoteToHTML turns a quote into an HTML string. We assume that the quote must always
// contain both a quote and a source; it may optionally contain a citation, a year and
// a medium.
// In practice all quotes have a tag property, but it's protected against a null value
// anyway as this is a practice exercise:
function quoteToHTML(quoteItem) {
  var html = '<p class = "quote">' + quoteItem.quote + '</p>' +
             '<p class = "source">' + quoteItem.source;
  if (quoteItem.citation) {
    html += '<span class="citation">' + quoteItem.citation + '</span>';
  }
  if (quoteItem.year) {
    html += '<span class="year">' + quoteItem.year + '</span>';
  }
  if (quoteItem.medium) {
    html += '<span class="medium">' + quoteItem.medium + '</span>';
  }
  html += '</p>';
  if (quoteItem.tag) {
    html += '<p class="tag">' + quoteItem.tag + '</p>';
  }
  document.title = "Nick's Random Quotes: " + quoteItem.tag;
  return html;
}

// detectDoubleClick waits for 400 milliseconds after the loadQuote button is clicked.
// If it is not clicked again during that time, it does the following:
// 1) Resets clickTracker so the next click doesn't automatically register as a double-click
// 2) Resets the autoQuoteTimer so the script waits another 10 seconds before automatically
//    changing the quote. (Without this, it would simply change the quote every 10 seconds
//    no matter what the user does in between times.)
// 3) Calls printQuote to print a new random quote to the browser.
// 4) Re-starts the autoQuoteTimer so that, if the user does nothing for 10 seconds, the
//    quote is updated automatically as before.
//
// If it IS clicked again during the 400 millisecond interval, it does the following:
// 1) Resets its own internal singleClickTimer to complete the double-click event
// 2) Calls the zarniwoop function... which is an easter-egg contained within magrathea.js.
//
// Acknowledgements to Ali Karbassi on github gist https://gist.github.com/karbassi/639453 for this one!

function detectDoubleClick() {
  clickTracker++;
  if (clickTracker === 1) {
    singleClickTimer = setTimeout(function() {
      clickTracker = 0;
      clearInterval(autoQuoteTimer);
      printQuote();
      autoQuoteTimer = setInterval(printQuote,quoteInterval);
    }, 400);
  } else if (clickTracker === 2) {
    clearTimeout(singleClickTimer);
    clickTracker = 0;
    zarniwoop();
  }
}

// printQuote:
// 1) Calls setBackgroundColour
// 2) Calls getRandomQuote using the current value of the working array - the do/while
//    loop ensures that it can't print the same quote twice in succession
// 3) Calls quoteToHTML to generate an HTML string for the quote;
// 4) Renders the new quote to the browser
// 5) Updates the value of currentQuote
function printQuote() {
  setBackgroundColour();
  var newQuote = null;
  do {
    newQuote = getRandomQuote(workingArray);
  } while (newQuote === currentQuote);
  var html = quoteToHTML(newQuote);
  document.getElementById("quote-box").innerHTML = html;
  currentQuote = newQuote;
}

//********************************************
// The code run when the browser loads
//********************************************

// OK, so I changed this first line of code even though TreeHouse told us not to...
// But I included a click/doubleclick distinction, and I needed to rename the first 
// function called to keep to the principle of clear and informative function-names.
// I think I'm still within the spirit of the rules:

document.getElementById('loadQuote').addEventListener("click", detectDoubleClick, false);

document.getElementById('pickHumour').addEventListener("click", setTagToHumour, false);
document.getElementById('pickScience').addEventListener("click", setTagToScience, false);
document.getElementById('pickFakes').addEventListener("click", setTagToFake, false);
document.getElementById('pickAny').addEventListener("click", setTagToAny, false);
document.getElementById('dontPanic').addEventListener("click", heartOfGold, false);



