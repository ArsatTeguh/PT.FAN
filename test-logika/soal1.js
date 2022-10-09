const kaosKaki = (arr) => {
  let data = arr.sort((a, b) => a - b);
  let sorting = [];
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i + 1] || data[i] === data[i - 1]) {
      sorting.push(data[i]);
    }
  }

  for (let i = 0; i < sorting.length - 1; i += 2) {
    if (sorting[i] === sorting[i + 1]) {
      total += 1;
    }
  }
  return total;
};
console.log(kaosKaki([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(kaosKaki([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(kaosKaki([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
