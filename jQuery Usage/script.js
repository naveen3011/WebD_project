$(document).ready(function() {
    // Wait for the document to be fully loaded
  
    // Target the button by its ID and attach a click event handler
    $("#myButton").click(function() {
      // When the button is clicked, change the text of the div
      $("#myDiv").text("Button clicked!");
    });
  });
  