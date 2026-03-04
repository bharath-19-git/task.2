const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    console.log('--- New Contact Form Submission ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('------------------------------------');

    // In a real application, you would send an email or save to a database here.
    res.status(200).json({ message: 'Message received successfully! (Simulated)' });
});

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'Server is running perfectly.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
