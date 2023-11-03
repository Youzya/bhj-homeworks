console.log('Task#3');
function bestRating (arr) {
  return Math.max.apply(null,arr);
};

function avgTop3(arr) {
  arr.sort(
    (a,b) => { return b - a; }
  );
  let sum = 0;
  for (let i = 0; i <= 2; i++) {
    sum += arr[i];
  }
  return sum / 3;
}

const gameResults = [74989, 74990, 84990, 62000, 58480, 61800];
console.log(`Самый лучший балл: ${bestRating(gameResults)}`);
console.log(`Средний балл ТОП-3: ${avgTop3(gameResults)}`);
