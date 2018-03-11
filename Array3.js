/*	-Buatlah function dengan nama dataHandling2, lalu gunakan splice agar menjadi array baru
	-gunakan split untuk memisah tgl bln th, format dd-mm-yyyy, gunakan swicth case
	-lakukan sorting secara descending
	-gabungkan dengan join, lalu pisah dgn strip(-)
	-batasi nama 15 karakter, pastikan dlm bentuk string, lalu slice

*/
var input= ['0001','Roman Alamsyah ','Bandar Lampung',	'21/05/1989','Membaca',];

function dataHandling2(input){
    input.splice(4,1, "Pria", "SMA Internasional Metro")
    input.splice(0,3, "0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    return input;
}
console.log(dataHandling2(input));

var pemisah = input[3][4].split();
var bulan = Number(pemisah);
switch (bulan) {
	case 1:
		bulan='Januari';
	break;
	case 2:
		bulan='Februari';
    break;
	case 3:
		bulan='Maret';
	break;
	case 4:
		bulan='April';
	break;
	case 5:
		bulan='Mei';
	break;
	case 6:
		bulan='Juni';
	break;
	case 7:
		bulan='Juli';
	break;
	case 8:
		bulan='Agustus';
	break;
	case 9:
		bulan='September';
	break;
	case 10:
		bulan='Oktober';
	break;
	case 11:
		bulan='November';
	case 12:
		bulan='Desember';
	}
console.log(bulan);

var pemisah1= input[3].split('/');
var pemisahBaru = [];
for (var i = 0; i < pemisah1.length; i++) {
	var bulan = Number(pemisah1[i]);
	pemisahBaru.push(bulan);
}

pemisahBaru.sort(function(a,b){
	return a < b;
});
console.log(pemisahBaru);

var gabungan= input[3].split('/').join('-');
console.log(gabungan);

var batasMax= input[1].split(' ');
var batas= batasMax.slice(0, 2).join(' ');
console.log(batas);