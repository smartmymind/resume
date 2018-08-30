'use strict';

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin',' Big Daddy',' Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;

  console.log(newStory);
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  console.log(newStory);
  // console.log(newStory.replace(':insertx:',xItem));

  console.log(xItem);
  console.log(yItem);
  console.log(zItem);
  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);
    console.log(newStory);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14) + ' stone';
    var temperature = Math.round(5*(94-50)/9+10) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);

    console.log(newStory);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}