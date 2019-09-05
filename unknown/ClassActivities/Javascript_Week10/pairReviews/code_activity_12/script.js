//Find two new examples of event handlers that you haven’t heard of before. What are they called and what do they do?
//wheel - The event occurs when the mouse wheel rolls up or down over an element	
//hashchange - The event occurs when there has been changes to the anchor part of a URL

//What are three different methods to have JavaScript work with events?
//HTML event attributes can execute JavaScript code directly
//HTML event attributes can call JavaScript functions
//You can assign your own event handler functions to HTML elements
//You can prevent events from being sent or being handled
//HTML
//Add an event listener

//Create a page with a button that when clicked, will change the background color to a randomly selected color. 
function getRandomColor() {
    var characters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    document.body.style.background = color;
    return color;
  }

  getRandomColor();

  