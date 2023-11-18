const checkForSpam = function (message) {
  if (message.indexOf("spam") || message.indexOf("sale")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam("No spam in this chat!")); // true
