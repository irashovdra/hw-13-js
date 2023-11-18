const formatString = function (string) {
  if (string.length > 40) {
    string = string.slice(0, 40);
  }
  console.log(string.length);
  return string;
};
console.log(
  formatString(
    "I started studying English seven years ago. I started studying English seven years ago."
  )
);
