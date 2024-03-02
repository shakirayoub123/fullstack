const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
app.use(bodyParser.json());

app.use(cors());
app.post('/api/login', (req, res) => {
    // Check if req.body exists and contains the email and password
    if (!req.body || !req.body.email || !req.body.password) {
        // If any required data is missing, send a 400 Bad Request response
        return res.status(400).json({ message: 'Missing email or password in request body' });
    }

    // Destructure email and password from req.body
    const { email, password } = req.body;

    // Perform authentication logic here

    // Example authentication logic
    if (email === 'example@example.com' && password === 'password') {
        // If authentication is successful, send a success response
        return res.status(200).json({ message: 'Login successful' });
    } else {
        // If authentication fails, send an error response
        return res.status(401).json({ message: 'Invalid email or password' });
    }
});
app.get('/api/data', (req, res) => {
    res.json([
        {
            name: 'John',
            age: 30,
            email: 'john@example.com'
        },
        {
            name: 'Alice',
            age: 25,
            email: 'alice@example.com'
        },
        {
            name: 'Bob',
            age: 35,
            email: 'bob@example.com'
        }
    ]);
});



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
