const emojis = [
    "🐵",
    "🐵",
    "🐶",
    "🐶",
    "🐺",
    "🐺",
    "🐮",
    "🐮",
    "🐷",
    "🐷",
    "🐰",
    "🐰",
    "🐻",
    "🐻",
    "🐼",
    "🐼",
];
let abrirEmojis = [];

let misturar = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = misturar[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (abrirEmojis.length < 2) {
        this.classList.add("abrindoCaixa");
        abrirEmojis.push(this);
    }

    if (abrirEmojis.length == 2) {
        setTimeout(checkMatch, 500)
    }
    console.log(abrirEmojis);
}

function checkMatch() {
    if (abrirEmojis[0].innerHTML === abrirEmojis[1].innerHTML) {
        abrirEmojis[0].classList.add("boxMatch");
        abrirEmojis[1].classList.add("boxMatch");
    } else {
        abrirEmojis[0].classList.remove("abrindoCaixa");
        abrirEmojis[1].classList.remove("abrindoCaixa");
    }

    abrirEmojis = [];
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu !");
    }
}