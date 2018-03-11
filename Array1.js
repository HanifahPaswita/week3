/*  Buatlah sebuah fungsi dengan nama balikString.
    Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
    -gunakan .length
    -gunakan looping
    -input "hello world!"
    -output "!dlrow olleh"
*/

function balikString(arr){
    x='';
    for (var i=arr.length-1; i>=0; i--){
        x+=arr[i]
    }
    return x
}
console.log(balikString('"hello world!"'));
