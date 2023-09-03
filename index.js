/* 
Buatlah 100 nilai random (1 sampai 50) pada 1 array
- Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan
nilai baru pada array
- Gunakan 2 array yang telah dibuat untuk mendapatkan
- Min
- Max
- Total
- Rata rata
- Bandingkan kedua buah array, contoh
- Min lebih besar array genap
- Max lebih besar array ganjil
- Total memiliki nilai sama antara array genap dan ganjil
- Rata rata lebih besar array ganjil
Output dari aplikasi:
- Array dengan jumlah index 100
- Array genap dengan jumlah index 50
- Array ganjil dengan jumlah index 50
- Min, Max, Total, Rata rata pada setiap array (genap dan ganjil)
- Perbandingan nilai min, max, total dan rata rata
Catatan :
- Dilarang menggunakan fungsi bawaan untuk min, max, total dan rata rata
- Buatlah menjadi beberapa fungsi agar kode dapat digunakan kembali
- Push ke REPO dan upload link REPO, tolong repo dalam status public
*/

var nilai = Array (92, 82, 17, 50, 96, 52, 51, 63, 59, 98, 66,
  91, 33, 14,  6, 31, 48, 29, 69,  3, 88, 43,
  23, 84,  7, 67, 53,  9, 64, 43, 16, 73, 74,
  36, 93, 79,  5,  1, 60,  4, 89, 30, 99, 52,
  76, 94,  2, 25, 61, 22)
var genap = [];
var ganjil = [];

// nilai array ganjilgenap
for(var i = 0; i < nilai.length; i++) {
    console.log(nilai[i]);
}
for(var i = 0; i < nilai.length; i++) {
    if(nilai[i] %2 == 0) {
    genap.push(nilai[i])
} else {
    ganjil.push(nilai[i])

}
}
console.log("genap: "+genap);
console.log("ganjil: "+ganjil);

// nilai minmax
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
console.log(`max: ${nilai.max()}` +
  `\nmin: ${nilai.min()}`);

// total index
var total = 0;
for(i = 0; i <nilai.length; i++){
   total += nilai[i];
}
console.log("total: "+total);

// rata-rata index
var mean = nilai => {
  if (nilai.length < 1) {
    return;
  }
  return nilai.reduce((prev, current) => prev + current) / nilai.length;
};
console.log("Rata-rata: "+mean(nilai));
console.log(mean(nilai)>ganjil);

// min > genap
// max > ganjil
console.log(nilai.min>genap)
console.log(nilai.max>ganjil)

// minmaxgenap minmaxganjil
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
console.log(`genapmax: ${genap.max()}` +
  `\ngenapmin: ${genap.min()}`);
  console.log(`ganjilmax: ${ganjil.max()}` +
  `\nganjilmin: ${ganjil.min()}`);

  //totalganjil
var totalganjil= 0;
for(i = 0; i <ganjil.length; i++){
   totalganjil += ganjil[i];
}
console.log("totalganjil: "+totalganjil);

//totalganjil
var totalgenap= 0;
for(i = 0; i <genap.length; i++){
   totalgenap += genap[i];
}
console.log("totalgenap: "+totalgenap);

// rata-rata genap
var mean = genap =>
{
  if (genap.length < 1) {
    return;
  }
  return genap.reduce((prev, current) => prev + current) / genap.length;
};
console.log("Rata-rata genap: "+mean(genap));

// rata-rata ganjil
var mean = ganjil =>
{
  if (ganjil.length < 1) {
    return;
  }
  return ganjil.reduce((prev, current) => prev + current) / ganjil.length;
};
console.log("Rata-rata ganjil: "+mean(ganjil));