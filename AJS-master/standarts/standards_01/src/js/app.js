function calcBonus(arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return (sum > 10000)?(Math.round(sum * 0.05)):0;
}

console.log('Task#1');
console.log(`Бонус = ${calcBonus([200, 550, 4000, 23, 58, 5000, 485, 711])}`);
