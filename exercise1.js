function logItems() {
  let message;
  const argumentNumber = argument.indexOf(prompt("enter fruit")) + 1;

  for (const argument of arguments) {
    message = `${argumentNumber} - ${argument}`;
  }

  return message;
}

console.log(logItems("Mango", "Apple", "Banana")); //  6
