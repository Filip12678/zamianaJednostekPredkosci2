/*

a - milimetr
b - centymetr
c - decymetr
d - metr
e - kilometr
f - mila
g - mila morska

s - sekunda
m - minuta
h - godzina

*/





function myFunction() {
	
	
	var jednostkaWejsciowa = document.getElementById('jednostkaWejsciowa').value;
	var jednostkaWyjsciowa = document.getElementById('jednostkaWyjsciowa').value;
	var wartosc = parseFloat(document.getElementById('wartosc').value);
	
	var mnoznikJednostkiDlugosci = zamianaJednostek(jednostkaWejsciowa.charAt(0), jednostkaWyjsciowa.charAt(0));
	var mnoznikJednostkiCzasu = zamianaJednostek(jednostkaWejsciowa.charAt(1), jednostkaWyjsciowa.charAt(1));
	
	
	var mnoznik = parseFloat(mnoznikJednostkiDlugosci)/parseFloat(mnoznikJednostkiCzasu);
	
	var wynik = wartosc * mnoznik;
	
	wynik = Math.round(wynik * 100000000000) / 100000000000;
	
	
	var ulamekDoPomnozenia = `<table> \n <tbody> \n <tr> \n <td style="border-bottom:solid 1px">${mnoznikJednostkiDlugosci}</td> \n </tr> \n <tr> \n <td>${mnoznikJednostkiCzasu}</td> \n </tr> \n </tbody> \n </table>`;
	
	
	if (parseFloat(mnoznikJednostkiCzasu) == 0.0166666666666666666666666666666) {
		
		ulamekDoPomnozenia = `<table> \n <tbody> \n <tr> \n <td style="border-bottom:solid 1px">${mnoznikJednostkiDlugosci * 60}</td> \n </tr> \n <tr> \n <td>1</td> \n </tr> \n </tbody> \n </table>`;
		
	}
	
	if (parseFloat(mnoznikJednostkiCzasu) == 0.000277777777777777777777777777777) {
		
		ulamekDoPomnozenia = `<table> \n <tbody> \n <tr> \n <td style="border-bottom:solid 1px">${mnoznikJednostkiDlugosci * 3600}</td> \n </tr> \n <tr> \n <td>1</td> \n </tr> \n </tbody> \n </table>`;
		
	}
	
	
	if (parseFloat(mnoznikJednostkiDlugosci) == 0.0006213711922373339696174341843633182215859381) {
		
		ulamekDoPomnozenia = `<table> \n <tbody> \n <tr> \n <td style="border-bottom:solid 1px">125</td> \n </tr> \n <tr> \n <td>${mnoznikJednostkiCzasu * 201168}</td> \n </tr> \n </tbody> \n </table>`;
		
	}
	
	if (parseFloat(mnoznikJednostkiDlugosci) == 0.000539956803455723542116630669546436285097192224622030237580993520518358531317494600431965442764578833693304535637149028077753779697624190064794816414686825) {
		
		ulamekDoPomnozenia = `<table> \n <tbody> \n <tr> \n <td style="border-bottom:solid 1px">1</td> \n </tr> \n <tr> \n <td>${mnoznikJednostkiCzasu * 1852}</td> \n </tr> \n </tbody> \n </table>`;
		
	}
	
	//wynik = Math.round(wynik * 10000000000) / 10000000000;
	
	document.getElementById("wynik").innerHTML = `Wynik: ${wynik} <br><br> ` + ulamekDoPomnozenia;
	
}






















function zamianaJednostek(a, b) {
	
	//milimetr
	
	if (a == "a") {
		
		mnoznik = 0.001;
		return zamianaJednostek_Z_MetrowNaPozostale(b, mnoznik);
		
	}
	
	
	//centymetr
	
	
	else if (a == "b") {
		
		mnoznik = 0.01;
		return zamianaJednostek_Z_MetrowNaPozostale(b, mnoznik);
		
	}
	
	
	//decymetr
	
	
	else if (a == "c") {
		
		mnoznik = 0.1;
		return zamianaJednostek_Z_MetrowNaPozostale(b, mnoznik);
		
	}
	
	
	//metr
	
	
	else if (a == "d") {
		
		mnoznik = 1;
		return zamianaJednostek_Z_MetrowNaPozostale(b, mnoznik);
		
	}
	
	
	
	//kilometr
	
	else if (a == "e") {
		
		mnoznik = 1000;
		return zamianaJednostek_Z_MetrowNaPozostale(b, mnoznik);
		
	}
	
	//mila
	
	else if (a == "f") {
		
		mnoznik = 1609.344;
		return zamianaJednostek_Z_MetrowNaPozostale(b, mnoznik);
		
	}
	
	//mila morska
	
	else if (a == "g") {
		
		mnoznik = 1852;
		return zamianaJednostek_Z_MetrowNaPozostale(b, mnoznik);
		
	}
	
	
	//sekunda
	
	else if (a == "s" && b == "m") {
		
		mnoznik = 1/60;
		return mnoznik;
		
	}
	
	else if (a == "s" && b == "h") {
		
		mnoznik = 1/3600;
		return mnoznik;
		
	}
	
	//minuta
	
	else if (a == "m" && b == "s") {
		
		mnoznik = 60;
		return mnoznik;
		
	}
	
	else if (a == "m" && b == "h") {
		
		mnoznik = 1/60;
		return mnoznik;
		
	}
	
	//godzina
	
	else if (a == "h" && b == "s") {
		
		mnoznik = 3600;
		return mnoznik;
		
	}
	
	else if (a == "h" && b == "m") {
		
		mnoznik = 60;
		return mnoznik;
		
	}
	//takie same jednostki
	
	else {
		
		return 1;
		
	}
	
	
}




function zamianaJednostek_Z_MetrowNaPozostale(jednostkaKoncowa, mnoznik) {
	
	if (jednostkaKoncowa == "a") {return mnoznik = mnoznik * 1000;}
	if (jednostkaKoncowa == "b") {return mnoznik = mnoznik * 100;}
	if (jednostkaKoncowa == "c") {return mnoznik = mnoznik * 10;}
	if (jednostkaKoncowa == "d") {return mnoznik = mnoznik * 1;}
	if (jednostkaKoncowa == "e") {return mnoznik = mnoznik * 0.001;}
	if (jednostkaKoncowa == "f") {return mnoznik = mnoznik * (125/201168);}
	if (jednostkaKoncowa == "g") {return mnoznik = mnoznik * (1/1852);}
}