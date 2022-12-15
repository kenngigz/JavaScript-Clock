"use strict";

var myInterval;

function myTime() {
  myInterval = setInterval(myTimer, 1000);
}
function myTimer() {
  //   console.log("me");
  const date = new Date();
  document.querySelector(".showTime").innerHTML = date.toLocaleTimeString();
}
