function randomQuotes(){
  $.ajax({
    url:"https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(response){
        $('#random_quote').html("<h1 id='random_quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</h1>")
      }
  });
  $.ajax({
    url:"https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(response){
        $('#random_quote1').html("<h1 id='random_quote1' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</h1>")
      }
  });
  $.ajax({
    url:"https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(response){
        $('#random_quote2').html("<h1 id='random_quote2' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</h1>")
      }
  });
}
$(function() {
  randomQuotes();
});
