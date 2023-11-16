const formatString = function (string) {
  if (string.length > 40) {
    string.slice(0, 40);
  }
  return string;
};

console.log(formatString("I started studying English seven years ago."));
