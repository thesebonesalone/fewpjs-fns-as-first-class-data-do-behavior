/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  let hour = parseInt(time.split(':')[0]);
  if (hour < 12) {
    return "Good Morning"
  }
  if (hour > 17) {
    return "Good Evening"
  }
  return "Good Afternoon"
}


function displayMessage(string) {
    let greetText = document.getElementById("greeting");
    greetText.innerText = string
}