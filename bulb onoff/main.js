// function on(){
//     document.getElementById('img').src = "onbulb.jpg"
//     // document.getElementById('img').src = "bulboff.jpg"
// }
// function off(){
//     document.getElementById('img').src = "bulboff.jpg"
// }

  // JavaScript code
  var isOn = false; // Initial state of the bulb

  function toggle() {
      var img = document.getElementById("img");
      if (isOn) {
          img.src = "bulboff.jpg"; // Agar bulb on hai toh off kar do
          isOn = false;
      } else {
          img.src = "onbulb.jpg"; // Agar bulb off hai toh on kar do
          isOn = true;
      }
  }