/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  array();
  console.log("Hello Rigo from the console!");
};
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function array() {
  const myArray =
    who[getRandomInt(3)] +
    " " +
    action[getRandomInt(3)] +
    " " +
    what[getRandomInt(2)] +
    " " +
    when[getRandomInt(4)];
  document.querySelector("#excuse").innerHTML = myArray;
}

// for (i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
