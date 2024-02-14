// This is a just a simple script to check teh size of screen you're viewing on and recommends the design size (i.e., 880p), if the screen smaller than the design range it sends an alert

function bodyWidth() {
  let width = document.body.clientWidth;

  if (width < 880) {
    alert("The screen is smaller in size. \n Please increase the screen to 880p or more");
  }
}
