const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const COUNTER_FILE = path.join(__dirname, 'counter.json');

function loadCounter() {
    if (fs.existsSync(COUNTER_FILE)) {
        const data = fs.readFileSync(COUNTER_FILE, 'utf8');
        return JSON.parse(data);
    }
    return { '/': 0, '/about': 0 };
}

function saveCounter(counter) {
    fs.writeFileSync(COUNTER_FILE, JSON.stringify(counter), 'utf8');
}

const counter = loadCounter();

app.get('/', (req, res) => {
    counter['/'] += 1;
    saveCounter(counter);
    res.send(`
        <h1>Home Page</h1>
        <p>Views: ${counter['/']}</p>
        <a href="/about"><button>Go to About</button></a>
    `);
});

app.get('/about', (req, res) => {
    counter['/about'] += 1;
    saveCounter(counter);
    res.send(`
        <h1>About Page</h1>
        <p>Views: ${counter['/about']}</p>
        <a href="/"><button>Go to Home</button></a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
