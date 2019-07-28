$(document).ready(function() {
  //VARIABLES
 
  //declare an array of cars that will be displayed as buttons to users
  var cars = ["lowrider" , "drifting", "corvette" , "supra"];
 
  //FUNCTIONS
  //function to make buttons and add to page
  //function populateButtons((cars), "car-input", append) {
   // document.getElementById("#cars-input").onclick = append;
   function renderButtons() {
    // Empty the buttons panel before redrawing it
    $("#cars-buttons").empty();
    // Loop through the array of animals
    for (var i = 0; i < cars.length; i++) {
      // Dynamicaly generate a button for each animal in the array
      var button = $("<button>");
      button.addClass("cars-buttons");
      button.attr("data-cars", cars[i]);
      button.text(cars[i]);
      // Add the button to the HTML
      $("#cars-buttons").append(button);
    }
  }
  renderButtons();

    //utlizing jQuery select areaToAddTo and chain on .empty()
    $("button").click(function(){
      $("cars-buttons").append()
      $("cars-buttons").empty();

    //for loop that iterates over array passed into function
      //declare a variable to create a dynamic buttton with jQuery
      $(document).ready(function() {
        for(i = 1; i < cars.length; i++) {
           $('<button/>', 
              text, i, 
              id, 'btn_'+i,
              click, function () {}
          );
      
      
      //add class to variable created and pass in the variale created
      var cars = button[cars];
      return new button[cars]();
      //add attribute and pass in data-type and arrayToUse[i]

      //add text and pass arayToUse[i]
      //select areaToAddTo and append variable created
    
  }
}
      )},

  
 
  //EVENT LISTENERS
 
  //create an event listener for a click event for the element .cars1-button
  $(document).on("click", ".cars-button", function() {
    //select #animals element and chain on empty method
 
    //select .cars-button element use removeClass and pass in 'active'
 
    //select this and add class of 'active'
 
    //declare a variable and assign value of selecting this and add attribute of 'data-type'
 
    //declare a variable that stores queryURL. in the queryURL include search endpoint for giphy and concatenate the variable declared above and concatenate your api key
 var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=k8TMB3q9ZbsY9ekSyM19SLChuGWhAp49&q=cars&limit=10&offset=0&rating=G&lang=en";
    //make ajax call with url and get method, chain .then with callback function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      
      //declare a variable results and stores the data
 
      //create a for loop that iterates over results
      for (var i = 0; i < results.length; i++) {
        //declare a variable and using jQuery dynamically generate a div with a class of animal-item
        //declare a variable that stores the rating of the data passed in
        //declare a variable and utilizing jQuery dynamically create a paragraph tag and using .text pass in rating
        //declare a variable that stores the results images fixed height url property
        //declare a variable that stores the fixed height still url property
        //declare a variable and utilizing jQuery dynamically create an img tag
        //add attribute to the variable created above passing in src and the variable still
        //add attribute to the variable animalImage and pass in data-still and still variable
        //add attribute to animalImage and pass in data-animate and animated variable
        //add class to animalImage and pass in 'animal-image'
        //append to animalDiv the p variable created
        //append to animalDiv and pass in animalImage
        //select #animals element and append animalDiv
      }
    });
  })
    )},
 
  //create event listener listening for a click on '.animal-image'
  $(document).on("click", ".cars-buttons", function() {
    //declare a variable called state and assing a value utilizing jQuery select this and add an attribute of 'data-state'
    //create conditional logic for state, if state = still utilize  data-animate, else utilize date-still
  }),
 
  //create an event listener for element 'add-animal when user clicks
  $("#add-cars-buttons").on("click", function(event) {
    //use preventDefault() to prevent refresh page
    //declare a newAnimal variable and utiliizing jQuery select input tag grab value
    //create condition if newAnimal.length > 2 push the newAnimal to the animals array
    //call createButtons function passing in arguments of animals, 'animal-button', and '#animal-buttons'
  }),
)
 
  //call createButtons function and pass in arguments animals, 'animal-button' and '#animal-buttons'
 