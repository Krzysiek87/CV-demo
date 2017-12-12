var h1 = document.getElementById("naglowek");
h1.textContent = "Krzysztof Sobecki";
var text = h1.textContent;

var h4 = document.getElementById("naglowek2");
h4.textContent = "Doradca kredytowy";
var text = h4.textContent;

var footer = document.getElementById("foot");
footer.style.fontStyle = "italic";
footer.textContent = "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).";
var text = footer.textContent;

var btn = document.getElementById("przycisk");

var polaFormularza = Array();
polaFormularza["imie i nazwisko"] = "Krzysztof Sobecki";
polaFormularza["data urodzenia"] = "22.04.1987r.";
polaFormularza["miejsce zamieszkania"] = "ul. Pułaskiego 87 m.12 15-337 Białystok";
polaFormularza["telefon"] = "790598144";
polaFormularza["email"] = "krzysztof.sobeckii@gmail.com";

btn.onclick = function () {
	for (var pole in polaFormularza) {
		var el = document.getElementById(pole);
		el.value = polaFormularza[pole];
	}
}
var el = document.getElementById("zdjecie");
el.src = "../CV/CSS/Krzysiek.png"
function loadImage() {
}

var x = document.getElementsByClassName("cont");
x[0].innerHTML = "Jestem skutecznym doradcą kredytowym z ponad 3-letnim doświadczeniem w branży finansowej. Posiadam doświadczenie w sprzedaży produktów bankowych. Cechuje mnie odpowiedzialność, zaangażowanie i wysoka kultura osobista. Poszukuję nowych możliwości rozwoju zawodowego.";
x[1].innerHTML = "1.03.2017r. - do dziś &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp LTU Finance Sp. z o.o. <br><br>Specjalista ds. weryfikacji i obsługi klienta";
x[2].innerHTML = "11.06.2014 - 28.02.2017r. &nbsp &nbsp &nbsp &nbsp Aventus Group Sp. z o.o.<br><br>Doradca kredytowy";
x[3].innerHTML = "17.10.2013 - 10.06.2014r. &nbsp &nbsp &nbsp &nbsp Idea Bank S.A.<br><br>Opiekun klienta";
x[4].innerHTML = "";
x[5].innerHTML = "";
x[6].innerHTML = '10.2017r. - do dziś Wydział Informatyki Politechniki Białostockiej, studia podylomowe na kierunku Front-End Development.<br><br>10.2009r. - 10.2011r. Wydział Prawa Uniwersytetu w Białymstoku, 2-letnie studia magisterskie na kierunku Administracja, Tytuł pracy dyplomowej: "Aspekty prawne dotyczące zatrudniania oraz transferów profesjonalnych zawodników piłkarskich"';
x[7].innerHTML = "11.2016r. Profesjonalna Obsługa Klienta z elementami sprzedaży w kontakcie telefonicznym<br><br>2.2008r. &nbsp Prawo jazdy kategorii B<br><br>9.2008r. Kurs Szkolenia Rezerw w Centrum Szkolenia Artylerii i Uzbrojenia w Toruniu. Nadano stopień podoficerski - kapral podchorąży Wojska Polskiego";
x[8].innerHTML = "";
x[9].innerHTML = "";
x[10].innerHTML = "J. Angielski - poziom średniozaawansowany w mowie i piśmie";



var list = document.getElementById("exp");

var tab = ["Procesowanie aplikacji pożyczkowych", "Wsparcie Klientów przy podejmowaiu decyzji pożyczkowych","Dbanie o wysoką jakość sprzedaży produktów","Utrzymywanie długofalowych relacji z Klientami Spółki"];
	 ul = document.createElement("ul");

for(var i in tab) {
	var li = document.createElement("li"),
		 content = document.createTextNode(tab[i]);
	
	li.appendChild(content);
	ul.appendChild(li);
}

list.appendChild(ul);

var list = document.getElementById("exp2");

var tab2 = ["Analiza potrzeb Klientów i weryfikacja aplikacji pożyczkowych", "Telefoniczna i mailowa obsługa Klienta (połączenia przychodzące i wychodzące)","Obsługa reklamacji","Wsparcie Klientów przy podejmowaniu decyzji pożyczkowych", "Utrzymywanie długofalowych relacji z Klientami Spółki", "Przeciwdziałanie wyłudzeniom", "Wdrażanie nowego produktu finansowego"];
	 ul = document.createElement("ul");

for(var i in tab2) {
	var li = document.createElement("li"),
		 content = document.createTextNode(tab2[i]);
	
	li.appendChild(content);
	ul.appendChild(li);
}

list.appendChild(ul);

var list = document.getElementById("exp3");

var tab3 = ["Telefoniczne rozpoznawanie potrzeb Klienta i umożliwienie kontaktu z doradcą finansowym", "Budowanie właściwych relacji i kontaktów z Klientami","Informowanie Klienta o bieżącej ofercie i produktach"];
	 ul = document.createElement("ul");

for(var i in tab3) {
	var li = document.createElement("li"),
		 content = document.createTextNode(tab3[i]);
	
	li.appendChild(content);
	ul.appendChild(li);
}

list.appendChild(ul);

var list = document.getElementById("interest");

var tab6 = ["Sport (Taekwon-do ITF, piłka nożna, bieganie)", "ASG", "Gry planszowe", "Programowanie"];
	 ul = document.createElement("ul");

for(var i in tab6) {
	var li = document.createElement("li"),
		 content = document.createTextNode(tab6[i]);
	
	li.appendChild(content);
	ul.appendChild(li);
}

list.appendChild(ul);

var list = document.getElementById("skill");

var tab7 = ["Znajomość pakietu Microsoft Office", "Dokładność", "Komunikatywność", "Samodzielność", "Zdolność do szybkiego uczenia się", "Znajomość systemu Credit Online", "Bardzo szybkie pisanie na klawiaturze"];
	 ul = document.createElement("ul");

for(var i in tab7) {
	var li = document.createElement("li"),
		 content = document.createTextNode(tab7[i]);
	
	li.appendChild(content);
	ul.appendChild(li);
}

list.appendChild(ul);