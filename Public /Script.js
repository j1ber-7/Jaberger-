// عرض المنيو
const menuItems = [
    { name: "كلاسيك جابرجر", price: "500 DA" },
    { name: "تشيز جابرجر", price: "650 DA" },
    { name: "جابرجر العملاق", price: "900 DA" }
];

const container = document.getElementById('items-container');
menuItems.forEach(item => {
    container.innerHTML += `<div class="card"><h3>${item.name}</h3><p>${item.price}</p></div>`;
});

// إرسال الطلب للـ Backend
document.getElementById('orderForm').onsubmit = async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById('customerName').value,
        burger: document.getElementById('burgerType').value
    };

    const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById('msg').innerText = result.message;
};
