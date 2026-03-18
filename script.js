// Qty နဲ့ Price မြှောက်ပြီး Amount ထုတ်ပေးရန်နှင့် Total ပေါင်းရန်
function calculateTotal() {
    let rows = document.querySelectorAll(".voucher-table tbody tr:not(.total-row)");
    let overallTotal = 0;

    rows.forEach(row => {
        let qty = row.querySelector(".qty").value || 0;
        let price = row.querySelector(".price").value || 0;
        let amountField = row.querySelector(".amount");

        // မြှောက်ခြင်း (Qty x Price)
        let amount = parseFloat(qty) * parseFloat(price);
        amountField.value = amount > 0 ? amount : "";

        // Total အတွက် အကုန်ပေါင်းခြင်း
        overallTotal += amount;
    });

    // Total အကွက်မှာ ပြသခြင်း
    document.querySelector(".total-row .amount-total").value = overallTotal;
}

// ပုံဒေါင်းလုဒ်လုပ်ရန် Function
function downloadVoucher() {
    const voucher = document.getElementById("voucher");
    const btn = document.querySelector(".print-btn-container");

    btn.style.display = "none";

    html2canvas(voucher, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff"
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "Lama-Zana-Voucher.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        btn.style.display = "block";
    }).catch(err => {
        console.error("Error:", err);
        btn.style.display = "block";
    });
}
