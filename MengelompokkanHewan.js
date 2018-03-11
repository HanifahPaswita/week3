/* Mengelompokan groupAnimal berisi kategori/kelompok sesuai abjad.

*/
function groupAnimals(animals){
var result=[];
animals.sort();
  for (var i=0; i<animals.length; i++){
    var hasil=[];
      var awal= animals[i][0];
      var urutan= animals[i];
      for (var j=animals.length-1; j>i; j--){
          if(awal===animals[j][0]){
              urutan=urutan+','+animals[j]
              animals.splice(j,1);
          }
      }
     hasil.push(urutan)
     result.push(hasil)
  }
  return result;
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));