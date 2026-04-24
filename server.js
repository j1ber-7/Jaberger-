const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
// إخبار السيرفر بمكان الملفات
app.use(express.static(path.join(__dirname, 'public')));

// عرض الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// استقبال الطلبات
app.post('/api/order', (req, res) => {
    const { name, burger } = req.body;
    console.log(`طلب جديد من ${name}: ${burger}`);
    res.json({ message: `تم استلام طلبك يا ${name}! جابرجر ${burger} في الطريق 🏎️` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running`));
