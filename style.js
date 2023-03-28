var i = 0;
var txt = 'Hi, I\'m Maria.';

function typeOut(string) {
  //begin delay for each letter typed
  setTimeout(() => {
    //only add letter or run function if the string is not done iterating.
    if (i < string.length) {
      //add character to dom here
      document.getElementsByClassName('typewrite')[0].innerHTML += string.charAt(i);
      //add iterator for next character in the string
      i++;
      //call the function once again to keep interation.
      typeOut(txt);
    }
    //set the time delay
  }, 150);
}

     
typeOut(txt);

