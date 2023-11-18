function calculateEngravingPrice(message, pricePerWord) {
  message = "I am studying JavaScript";
  const newArray = message.split(" ");
  const totalPrice = newArray.length * pricePerWord;
  return totalPrice;
}

console.log(calculateEngravingPrice("I am studying JavaScript", 10));

// 1. Перетворити рядок на масив
// 2. Знайти довжину масиву
