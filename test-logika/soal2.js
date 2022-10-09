const jumlahKata = (kalimat) => {
  const totalKata = kalimat.split(" ");
  const arr = [...kalimat];
  let result = 0;
  const symbl = ["!", "_", "[", "*", "(", ")", "=", "&"];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === symbl[j]) {
        result += 1;
      } else {
        result += 0;
      }
    }
  }
  return totalKata.length - result;
};

console.log(jumlahKata("Saat meng*ecat tembok, Agung dib_antu oleh Raihan."));
console.log(jumlahKata("Berapa u(mur minimal[ untuk !mengurus ktp?"));
console.log(
  jumlahKata("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.")
);
