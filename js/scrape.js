const zaphod = document.getElementById("dontPanic");
let quoteParagraph = document.getElementById("quoteParagraph");
let quoteText = "Blank to begin with";

function findElements() {
  if (zaphod) {
    console.log("The test 'if (zaphod)'' returned 'true'.");
  }
  console.log("Display property is: " + zaphod.style.display);
  let zaphodText = document.getElementById("dontPanic").innerHTML;
  if (zaphod.style.display === "inline-block") {
    console.log("Douglas Adams button should now be visible and show the text: " + zaphodText);
  } else {
    console.log("Douglas Adams button should still be hidden.");
  }
  quoteParagraph = document.getElementById("quoteParagraph");
  quoteText = quoteParagraph.innerHTML;
  console.log("Quote text should be: " + quoteText);
}



findElements();