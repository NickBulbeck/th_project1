// This file is, of course, named after the legendary Magrathea from The Hitch-hiker's
// Guide to the Galaxy. Inevitably, if you haven't read Douglas Adams' classic
// five-volume trilogy, then you won't get the references here. But I think that
// most software developers have either read it, or are going to!

var trinTragula = 0;

function heartOfGold() {
  document.getElementById("dontPanic").innerHTML = "Please do not press this button again";
  document.getElementById("tagPicker").style.width = "1100px";
  trinTragula++;
  if (trinTragula > 1) {
    youHaveBeenDivertedArthurDent();
  }
}

function zarniwoop() {
  document.getElementById("dontPanic").style.display = "inline-block";
  if (trinTragula === 0) {
    document.getElementById("tagPicker").style.width = "1000px";
  }
}

function youHaveBeenDivertedArthurDent() {
  document.body.style.backgroundColor = "#000";
  document.body.innerHTML = '<div id="totalPerspectiveVortex">You are here: <ul><li></li></ul></div>';
}