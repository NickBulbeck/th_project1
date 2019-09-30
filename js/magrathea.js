// This file is, of course, named after the legendary Magrathea from The Hitch-hiker's
// Guide to the Galaxy. Inevitably, if you haven't read Douglas Adams' classic
// five-volume trilogy, then you won't get the references here. But I think that
// most software developers have either read it, or are going to!

// The variable and function names here make no readable sense. They're all
// taken from the Hitch-hiker Trilogy. In that sense, they're badly named.

var trinTragula = 0;

// This function displays the Douglas Adams button and widens the tagPicker element to contain it.
// The function is called if the loadQuote button is double-clicked.
// The trinTragula test is to make sure that tagPicker isn't set to 1000px if loadQuote is double-clicked again
// after the Douglas Adams button has been clicked.
function zarniwoop() {
  document.getElementById("dontPanic").style.display = "inline-block";
  if (trinTragula === 0) {
    document.getElementById("tagPicker").style.width = "1000px";
  }
}

// This function is called when the Douglas Adams button is clicked.
// It changes the button text and makes tagPicker slightly wider again to accommodate it.
// trinTragula is incremented so that, if the button is clicked twice, you enter the Total Perspective Vortex...
function heartOfGold() {
  document.getElementById("dontPanic").innerHTML = "Please do not press this button again";
  document.getElementById("tagPicker").style.width = "1100px";
  trinTragula++;
  if (trinTragula > 1) {
    youHaveBeenDivertedArthurDent();
  }
}

// the clearInterval makes sure the script doesn't keep trying to change the quote. It can't, because
// the quote-box element has been removed, but it does change the background colour from black to random.
// We don't want this, because the Total Perspective Vortex annihilates the site's soul.
function youHaveBeenDivertedArthurDent() {
  document.body.style.backgroundColor = "#000";
  document.body.innerHTML = '<div id="totalPerspectiveVortex">You are here: <ul><li></li></ul></div>';
  clearInterval(autoQuoteTimer);
}






