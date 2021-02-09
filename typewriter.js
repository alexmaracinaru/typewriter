"use strict";
//getting the text from HTML to JS
const text = document.querySelector(".typewritten").textContent;
//clearing the text from HTML
document.querySelector(".typewritten").innerHTML = "";
console.log(text);
const typekey1 = document.querySelector("#typekey1");
const typespace = document.querySelector("#typespace");
const typelast = document.querySelector("#typelast");
const typereturn = document.querySelector("#typereturn");

let index = 0;
// Appending one letter after another with a 80 miliseconds delay.
const loop = () => {
  setTimeout(() => {
    document.querySelector(".typewritten").textContent += text[index];
    index++;
    if (text[index] === " ") {
      typespace.play();
    } else {
      typekey1.play();
    }
    //trying to get the sounds at the very end of the text and then the return sound.
    if (text[index] === text.length - 1) {
      typelast.play() + typereturn.play();
    }
    //looping until the text finishes.
    if (index > text.length - 1) {
      //do nothing
    } else {
      loop();
    }
  }, 600);
};
loop();

// --------- THE CODE BELOW WAS WRITTEN BEFORE THE let index = 0,
//BUT MOVED HERE TO THAT THE --------
//ACTIVE CODE CAN BE READ MORE EASILY. THE PROCESS TO GET TO INDEX
// IS BELOW, BUT WAS REPETITIVE SO THE index VARIABLE WAS CREATED.
//
//
//
//
//const firstLetter = text.substring(0, 1);
//console.log(firstLetter);
/*
//Taking the first letter out of the text variable
const firstLetter = text[0];
//and putting it back into the html
document.querySelector(".typewritten").textContent = firstLetter;
//Taking the second letter out of the text variable
const secondLetter = text[1];
// Setting a time of 'delivery' of that second letter and adding it to the first
setTimeout(() => {
  document.querySelector(".typewritten").textContent += secondLetter;
}, 1000);
const thirdLetter = text[2];
setTimeout(() => {
  document.querySelector(".typewritten").textContent += thirdLetter;
}, 2000);

setTimeout(() => {
  document.querySelector(".typewritten").textContent += text[3];
}, 3000);
*/
