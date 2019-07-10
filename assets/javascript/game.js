var targetNumber = 75;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  var numberOptions = [10, 5, 3, 7];

  
  for (var i = 0; i < numberOptions.length; i++) {

   
    var imageCrystal = $("<img>");

    
    imageCrystal.addClass("crystal-image");

    
    imageCrystal.attr("src", "assets/images/box.gif");
    imageCrystal.attr("src", "assets/images/pir.gif");
    imageCrystal.attr("src", "assets/images/spin.gif");
    imageCrystal.attr("src", "assets/images/box.gif");
    imageCrystal.attr("src", "assets/images/box.gif");
      <img src="assets/images/box.gif" class="auth-image" alt="box" button id="box.button" value="25">
      <img src="assets/images/pir.gif" class="auth-image" alt="pir" button id="pir.button" value="1">
      <img src="assets/images/spin.gif" class="auth-image" alt="spin" button id="spin.button" value="5">
      <img src="assets/images/sun.gif" class="auth-image" alt="sun" button id="sun.button" value="15"></img>
    
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    
    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    counter += crystalValue;

    alert("New score: " + counter);
    if (counter === targetNumber) {
      alert("You win!");
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
