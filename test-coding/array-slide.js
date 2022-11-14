const arraySlide = (n, count) => {
  let arrayDihapus;
  let arrySave = [];

  for (let i = 0; i < count; i++) {
    if (n.length === 20) {
      return n
    } else {
      arrayDihapus = n.shift();
      arrySave.push(arrayDihapus);
    }
  }

  if (n.length === count * 2) return n;
  if (count > 10) return n.concat(arrySave);
 arrySave.reverse()
  return n.concat(arrySave);
};

console.log(
  arraySlide([1,2,3,4,5], 2)
);
console.log(
  arraySlide([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10)
);
console.log(
  arraySlide([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13)
);
