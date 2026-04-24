const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static('public'));

// استقبال الطلبات
app.post('/api/order', (req, res) => {
    const { name, burger } = req.body;
    console.log(`طلب جديد من ${name}: ${burger}`);
    res.json({ message: `تم استلام طلبك يا ${name}! جابرجر ${burger} في الطريق 🏎️` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Jaberger server running on http://localhost:${PORT}`));
