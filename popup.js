document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;
        generateQRCode(url);
    });
});

function generateQRCode(url) {
    const qrCodeContainer = document.getElementById("qrCode");

    const img = document.createElement("img");
    img.src = https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)};
    img.alt = "QR-код";

    qrCodeContainer.appendChild(img);
}