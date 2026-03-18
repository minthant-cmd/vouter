document.addEventListener('DOMContentLoaded', () => {
    // ၁။ ယနေ့ရက်စွဲ
    const dateInput = document.getElementById('autoDate');
    if (dateInput) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateInput.value = today.toLocaleDateString('en-US', options);
    }

    // ၂။ Auto-Calculate
    const tableBody = document.getElementById('voucherBody');
    const grandTotalInput = document.getElementById('grandTotal');

    tableBody.addEventListener('input', () => {
        let total = 0;
        const rows = tableBody.querySelectorAll('tr');

        rows.forEach(row => {
            const qty = parseFloat(row.querySelector('.qty').value) || 0;
            const price = parseFloat(row.querySelector('.price').value) || 0;
            const amountField = row.querySelector('.amount');

            const amount = qty * price;
            amountField.value = amount > 0 ? amount.toLocaleString() : "";
            total += amount;
        });
        grandTotalInput.value = total.toLocaleString();
    });
});

// ၃။ Image Download Function
function downloadVoucher() {
    const voucher = document.getElementById("voucher");
    const btnContainer = document.querySelector(".print-btn-container");

    btnContainer.style.display = "none";

    html2canvas(voucher, {
        scale: 3,
        backgroundColor: "#f4f7f6"
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "Lama-Zana-Voucher.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        btnContainer.style.display = "block";
    });
}