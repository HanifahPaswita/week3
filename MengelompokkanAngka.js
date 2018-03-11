/*  Diberikan sebuah function mangelompokanAngka(arr)
    -baris pertama merupakan angka-angka genap           0
    -baris kedua merupakan angka-angka ganjil            1  
    -baris ketiga merupakan angka-angka kelipatan 3      2
*/

function mengelompokkanAngka(arr) {
  var arr_kelompok = [[],[],[]];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] % 3 === 0){
        arr_kelompok[2].push(arr[i]);
        continue;
      }
      if (arr[i] % 2 !== 0){
        arr_kelompok[1].push(arr[i]);
        continue;
      }
      if (arr[i] % 2 === 0){
        arr_kelompok[0].push(arr[i]);
        continue;
      }
    }
    return arr_kelompok;
}
console.log(mengelompokkanAngka([2, 4, 6])); 
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); 
console.log(mengelompokkanAngka([])); 