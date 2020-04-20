

function harfSec() {
    var sira = Math.round(Math.random() * kelimeler.length);
    kelime = new String(kelimeler[sira]);
    kelime = kelime.split("");

    /*kelime= kelime.map(function(gelen){
    return gelen+"_";
    });*/

    yertutucu(kelime);
}

//gizli harflerin yerine gösterlicek butonlar
function yertutucu(kelime) {
    var yertutucu = document.getElementById("yertutucu");
    yertutucu.innerHTML = "";
    daragaci.innerHTML = "";
    tumHarflerAktif();
    hak = 0;

    for (var i = 0; i < kelime.length; i++) {
        var harf = document.createElement("button");
        harf.setAttribute("type", "button")
        harf.classList.add("btn", "btn-primary", "bharf");
        harf.textContent = "_";
        yertutucu.appendChild(harf);
    }
}

function harfKontrol(kelime, harf) {
    return kelime.some(x => x == harf);
}

function harfYerlestir(kelime, harf) {
    var bharfler = document.querySelectorAll(".bharf");
    for (sira in kelime) {
        if (harf == kelime[sira]) {
            bharfler[sira].textContent = harf;
        }
    }
}

function tumHarfleriYaz(kelime) {
    var bharfler = document.querySelectorAll(".bharf");
    for (sira in kelime) {
        harfYerlestir(kelime, kelime[sira]);
    }
}

function tumHarflerPasif() {
    harfler.forEach(function (eleman) {
        eleman.setAttribute("disabled", "disabled");
    });

}
function tumHarflerAktif() {
    harfler.forEach(function (eleman) {
        eleman.removeAttribute("disabled");
    });

}
function tireKontrol() {
    var durum = false;
    var bharfler = document.querySelectorAll(".bharf");

    for (sira in bharfler) {

        if (bharfler[sira].textContent == "_") {
            durum = true;
        }
    }
    return durum;

}

function harfEkle(harf) {
    cikanHarf.textContent = cikanHarf.textContent + " " + harf;
}