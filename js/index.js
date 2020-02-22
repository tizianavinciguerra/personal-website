var elGreetings = document.getElementById("greetings");
elGreetings.innerHTML = getTime();

function getTime() {
  var d = new Date();
  var n = d.getHours();
  if (n < 12) {
    return "Good Morning!";
  } else if (n < 17 ) {
    return "Good Afternoon!";
  } else if (n < 21) {
    return "Good Evening!";
  } else {
    return "Nighty Night!";
  }
}
