function downloadVoucher() {
    const voucher = document.getElementById("voucher");
    const btn = document.querySelector(".print-btn-container");

    // ခေတ္တခဏ ဖျောက်ထားမယ်
    btn.style.display = "none";

    // Logo image ကို သေချာ load လုပ်ခိုင်းခြင်း
    html2canvas(voucher, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        logging: true,
        backgroundColor: "#ffffff"
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "Voucher.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        btn.style.display = "block";
    }).catch(err => {
        console.error("Error:", err);
        btn.style.display = "block";
    });
}
