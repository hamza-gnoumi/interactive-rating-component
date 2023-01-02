let ratSection = document.querySelector(".ratingState");
let nbres = document.querySelectorAll(".ratingState .nbres span");
let submitBtn = document.querySelector(".ratingState a");
let thankSection = document.querySelector(".thankyou");
let selectedtext = document.querySelector(".thankyou .selected");

var r = document.querySelector(':root');
var rs = getComputedStyle(r);

let selected = 1;
nbres.forEach((nbre) => {
    nbre.onclick = () => {
        resetNbre();
        selected = nbre.dataset.rat;
        nbre.classList.add("activeNbre");
    }
});

function resetNbre() {
    nbres.forEach((nbre) => {
        nbre.classList.remove("activeNbre");
    });
}

submitBtn.onclick = () => {
    selectedtext.innerHTML = `You selected ${selected} out of 5`;
    ratSection.style.display = "none";
    thankSection.style.display = "block";
}
