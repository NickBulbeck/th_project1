//
//   I've kept the data itself here in a separate file. The idea of this is to try to look ahead
//   to more sophisticated, full-stack projects where the data is in a database and thus
//   completely outside the code.
//
//   Quote objects can be created, updated or deleted without affecting the working of the app.
//


var quotes = [
  {quote: "When I first said I wanted to be a comedian, everyone laughed. They're not laughing now.",
   source: "Bob Monkhouse",tag: "humour"},
  {quote: "If I have seen further than others, it is because I have stood on the shoulders of giants.",
   source: "Isaac Newton", year: 1676, citation:"Letter to Robert Hooke", tag: "science"},
  {quote: "Play it again, Sam!",
   source: "Supposedly Humphrey Bogart...", citation: "but this phrase never actually occurs in the film 'Cassablanca'.", tag: "fake"},
  {quote: "Special delivery, a bomb. Were you expecting one?",
   source: "Peter Sellers", year: 1978, citation: "Revenge of the Pink Panther", tag: "humour"},
  {quote: "All that is necessary for the triumph of evil, is that good men should do nothing.",
   source: "Supposedly Edmund Burke...", citation: "but there's no evidence Burke ever said this.", tag: "fake"},
  {quote: "Elementary, Watson!",
   source: "Supposedly Sherlock Holmes...", citation: "but Conan Doyle's original character never uttered these words.", tag:  "fake"},
  {quote: "Money is the root of all evil.",
   source: "Supposedly St. Paul...", citation: "but this phrase occurs nowhere in the Bible.", tag: "fake"},
  {quote: "A very great deal more truth can be known, than can be proven.",
   source: "Richard Feynman", year:1965, citation:"Nobel lecture", tag:"science"},
  {quote: " My father had a profound effect on me. He was a lunatic.",
   source: "Spike Milligan", tag: "humour"},
  {quote: "If you want to have good ideas you must have many ideas.",
   source: "Linus Pauling", citation: "quoted by Francis Crick", tag: "science"},
  {quote: "Hopefully, I’ve got a book coming out soon. Shouldn’t have eaten it, really.",
   source: "Milton Jones", year:2017, tag: "humour"},
  {quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
   source: "Alan Turing",date: 1950, citation: " Quarterly Review of Psychology and Philosophy", tag: "science"} 
];