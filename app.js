function calculateCostPerSquareInch(diameter, price) {
  const radius = diameter / 2;
  const area = Math.PI * radius * radius;
  return price / area;
}

function findBestValuePizza(pizzas) {
  let bestValuePizza = pizzas[0];
  let bestValue = calculateCostPerSquareInch(
    pizzas[0].diameter,
    pizzas[0].price
  );

  for (let i = 1; i < pizzas.length; i++) {
    const costPerSquareInch = calculateCostPerSquareInch(
      pizzas[i].diameter,
      pizzas[i].price
    );
    if (costPerSquareInch < bestValue) {
      bestValue = costPerSquareInch;
      bestValuePizza = pizzas[i];
    }
  }

  return bestValuePizza;
}

const pizzas = [
  { diameter: 7, price: 4 },
  { diameter: 9, price: 6 },
  { diameter: 12, price: 10 },
  { diameter: 15, price: 12 },
];

const bestValuePizza = findBestValuePizza(pizzas);

console.log(
  `The best value for money is the ${bestValuePizza.diameter}" pizza costing £${bestValuePizza.price}`
);
