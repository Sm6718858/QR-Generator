
const qrText = document.querySelector("#qrText");
const qrImage = document.querySelector("#qrCode");
const generateBtn = document.querySelector("#generateBtn");

function updateQrImage() {
    if (qrText) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrImage.style.display = "inline-block"; // Ensure the image is visible
    } else {
        qrImage.style.display = "none"; // Hide image if input is empty
        alert("Please enter text or URL to generate QR code.");
    }
}

// Event listener for button click
generateBtn.addEventListener("click", updateQrImage);
