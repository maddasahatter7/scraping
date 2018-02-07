// Just figured out how to enlarge the text on this VS bizznatch. Had to document.
// I feel blessed. Okay lets do this. Also im going to rely heavily on the 
// classwork for this little dude. 


// using json and grabbing me some articles
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Displaying info to the page
      $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
  });
  
 