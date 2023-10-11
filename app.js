var tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

window.onload = function () {
  let elso = "elsoElem";

  document.getElementById(elso + "Button").addEventListener("click", function () {
    ElemMegjelenitese(0, document.getElementById(elso));
  });

  let masodik = "masodikElem";

  document.getElementById(masodik + "Button").addEventListener("click", function () {
    ElemMegjelenitese(1, document.getElementById(masodik));
  });

  let harmadik = "harmadikElem";

  document.getElementById(harmadik + "Button").addEventListener("click", function () {
    ElemMegjelenitese(2, document.getElementById(harmadik));
  });

  let osszes = "osszesElem";

  document.getElementById(osszes + "Button").addEventListener("click", function () {
    OsszesElem(document.getElementById(osszes));
  });

  let hozzaadas = "elemHozzaadasa";

  document.getElementById(hozzaadas + "Button").addEventListener("click", function () {
    ElemHozzaadasa(document.getElementById(hozzaadas));
  });

  document.getElementById("tombHosszaButton").addEventListener("click", function () {
    TombHossza(document.getElementById("tombHossza"));
  });

  let torles = "torlesIndex";

  document.getElementById(torles + "Button").addEventListener("click", function () {
    TorlesIndex(document.getElementById(torles));
  });
};

function ElemMegjelenitese(i, pTag) {
  pTag.textContent = tomb[i];
}

function OsszesElem(pTag) {
  pTag.textContent = tomb;
}

function ElemHozzaadasa(inputTag) {
  let ujElem = inputTag.value;
  tomb.push(ujElem);
}

function TombHossza(pTag) {
  pTag.textContent = "A tömb jelenlegi hossza: " + tomb.length;
}

function TorlesIndex(inputTag) {
  let index = inputTag.value;
  tomb.splice(index, 1);
}
