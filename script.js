// Execute whatever after the document is ready!
$(function () {
  // Get some basic page data.
  // Check if you are inside the links page.
  var InsidePage = !!window.location.href.split("/")[3];
  var PageName = null;
  if (InsidePage) {
    // Get the pageName.
    PageName = window.location.href.split("/")[3];
    // Get the data based on Page Data.
    $.getJSON("/links/" + PageName + ".json", function (res) {
      // Console log all the required values for us.
      console.log({
        InsidePage,
        PageName,
        Data: res
      });
    })
    .fail(function() {
      console.log( "Error, User not found!" );
    });
  }
});