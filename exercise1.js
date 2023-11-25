function logItems(items) {
  let message = "";
  let fruitNumber = fruit.indexOf(prompt("enter fruit")) + 1;

  for (const fruit of items) {
    message = `${fruitNumber} - ${fruit}`;
  }
  console.log(message);
  return message;
}

console.log((logItems = ["Mango", "Apple", "Banana"]));
