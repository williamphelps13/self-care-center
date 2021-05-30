var affirmationRadio = document.querySelector("#affirmation");
var mantraRadio = document.querySelector("#mantra");
var messageButton = document.querySelector(".message-button");
var clearButton = document.querySelector(".clear-button");
var meditationImage = document.querySelector(".meditation-image");
var message = document.querySelector(".message");

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

messageButton.addEventListener('click', showRandomMessage);
clearButton.addEventListener('click', clearMessage);

function showRandomMessage() {
  hide(meditationImage)
  show(message)
  if (affirmationRadio.checked) {
    message.innerText = affirmations[getRandomIndex(affirmations)];
  } else if (mantraRadio.checked){
    message.innerText = mantras[getRandomIndex(mantras)];
  } else {
    message.innerText = "✨ Select affirmation or mantra to see a message ✨"
  }
}

function hide(element) {
  element.classList.add('hidden')
};

function show(element) {
  element.classList.remove('hidden')
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function clearMessage(){
  hide(message)
  show(meditationImage)
}





//NEXT:
// User should not be able to click the “Receive Message” button unless they have selected a message option.

//DOUBLE CHECK:
// The user can click a clear button, which clears the page of any message.
// User should only be able to click the clear button if a message is visible.
// When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.
