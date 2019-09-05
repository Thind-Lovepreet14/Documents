//Create a function in JS to assign and use the onmouseover event handler for an image. 
//When you mouse over this image, make a description appear next to it.

var picture = document.getElementById('flowers');

picture.onmouseover = function() {
  document.getElementById('weddingDay').style.display = 'block';
}

picture.onmouseout = function() {
  document.getElementById('weddingDay').style.display = 'none';
}   