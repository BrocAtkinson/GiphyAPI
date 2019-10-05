$(document).ready(function() {

    var cars = ["lowrider", "drifting", "corvette", "supra"];
    
    function () {
      $("#cars-input").empty();
      for (var i = 0; i < cars.length; i++) {
        var button = $("<button>");
        button.addClass("add-cars-buttons");
        button.attr("data-cars", cars[i]);
        button.text(cars[i]);
        // Add the button to the HTML
        $("#cars-buttons");
        return cars - renderButtons();
      }
    
      function button(){
        var action = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=k8TMB3q9ZbsY9ekSyM19SLChuGWhAp49&q=cars&limit=10&offset=0&rating=G&lang=en";
        console.log(queryURL); 
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            console.log(response); 
            var results = response.data;
            if (results == ""){
             
            }
    
      $("button").click(
        function() {
          $("cars-buttons").append();
          $("cars-buttons").empty();
    
          $(document).ready(function() {
            for (i = 1; i < cars.length; i++) {
              $("<button/>", text, i, id, "btn_" + i, click, function() {});
    
           
              var cars = $("#cars-input")
                .val()
                .trim();
              var cars = button[cars];
              return new button[cars]();
            }
          });
        },
      )}
      )}
    }});
    
     