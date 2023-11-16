function calculateEngravingPrice(message, pricePerWord) {
  const totalPrice = message.split(" ") * pricePerWord;
  return totalPrice;
}

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
