const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// 中介軟體設置
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 支援 URL-encoded 資料

// 連接 MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
    .then(() => console.log('成功連接到 MongoDB'))
    .catch(err => {
        console.error('連接到 MongoDB 失敗:', err);
        process.exit(1);
    });

// 定義學生模型
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

// GET /students - 取得學生列表
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: '伺服器錯誤' });
    }
});

// POST /students - 新增學生
app.post('/students', async (req, res) => {
    const { name, age, grade } = req.body;

    if (!name || !age || !grade) {
        return res.status(400).json({ error: '缺少必要欄位' });
    }

    const newStudent = new Student({
        name,
        age: parseInt(age),
        grade
    });

    try {
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: '伺服器錯誤' });
    }
});

// 處理未匹配的路由
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器運行於 http://localhost:${PORT}`);
});