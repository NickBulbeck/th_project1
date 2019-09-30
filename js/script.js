/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// The VARIABLES section
//
// clickTracker: used for detecting a double-click
// workingArray: supports the ability to select quotes with a specific tag (category)
// currentQuote: used to ensure that the quote always changes when printQuote() is called
// autoQuoteTimer: used to change the quote after 10 seconds if the user does nothing

var clickTracker = 0;
var workingArray = quotes;
var currentQuote = null;
var autoQuoteTimer = setInterval(renderQuoteToBrowser,10000);
// the FUNCTIONS section

// getRandomQuote: 



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/





document.getElementById('loadQuote').addEventListener("click", printQuote, false);

console.log(quotes);

// autoQuoteTimer = setInterval(renderQuoteToBrowser,10000);








