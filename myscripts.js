function myFunction() {
  var x = document.getElementById("Courses");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
