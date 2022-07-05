let a;
let b;
let v;

let objem;
let povrch;

document.getElementById("submit").onclick = function() {
    //zadanie stran
    a = document.getElementById("aText").value;
    a = Number(a);

    b = document.getElementById("bText").value;
    b = Number(b);

    v = document.getElementById("vText").value;
    v = Number(v);

    //vyratanie vysledku
    objem = (a*b*v);

    povrch = (2*(a*b+a*v+b*v));

    document.getElementById("vysledok").innerHTML = "Objem je: " + objem + " Povrch je: " + povrch;

}