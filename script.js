var sandwich = {};

sandwich.noun = document.querySelector("#noun1");
sandwich.adjOne = document.querySelector("#adj1");
sandwich.activity = document.querySelector("#activity");

let story = document.querySelector("#story");
let launch = document.querySelector("#launch");

launch.addEventListener("click", madlibify, false);

// takes user input and writes it to the page

function madlibify() {
  let launchedStory = ``;
  launchedStory += `<p>During your Winter break, you ${sandwich.activity.value}, but all the sudden, you saw a ${sandwich.adjOne.value} ${sandwich.noun.value}. That was crazy!`;

  story.innerHTML = launchedStory;
}
