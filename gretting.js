const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  let hi;

  let today = new Date();
  let hours = today.getHours();
  
  
  
  if( 6 <= hours && hours <= 10){
    hi = "Good Monning";

  } else if(11 <= hours && hours <= 23){
    hi = "Good Evening";
  } else if(24 === hours || 0 <= hours <= 5) {

    hi = "Good Night";
  }

  console.log(hi);
  greeting.innerText = `${hi}. ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}



function init() {
  loadName();
}

init();