const checkForSpam = function (message) {
  if (message.indexof("spam") || message.indexof("sale")) {
    true;
  } else {
    false;
  }
};

console.log(checkForSpam("No spam in this chat!")); // true
