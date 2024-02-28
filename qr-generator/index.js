const qr = document.querySelector(".qr");
const image = qr.querySelector(".image img");
const btn = qr.querySelector(".btn");
const inputValue = qr.querySelector(".input");
const pValue = qr.querySelector(".container p");

btn.addEventListener("click", () => {
    let invalue = inputValue.value;

    btn.innerText = "Generating...";

    if (!inputValue.value) {
        pValue.innerText = "Please Enter the text";
        btn.innerText = "Generate QR Code";
    }

    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${invalue}`;

    image.addEventListener("load", () => {
        qr.classList.add("active");
        btn.innerText = "Generate QR Code";
    });
});

inputValue.addEventListener("keyup", () => {
    if (!inputValue.value) qr.classList.remove("active");
});
