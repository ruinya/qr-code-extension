document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const qrDataInput = document.getElementById('qrData');
    const qrCodeContainer = document.getElementById('qrCodeContainer');

    generateBtn.addEventListener('click', function() {
      const qrData = qrDataInput.value;
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}`;

      qrCodeContainer.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;
    });
});
