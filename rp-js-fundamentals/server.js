const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route to handle POST requests to '/sum'
app.post('/sum', (req, res) => {
    // Extract two numbers from request body
    const { num1, num2 } = req.body;

    // Check if both numbers are provided
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Please provide two numbers' });
    }

    // Convert the numbers to integers and calculate the sum
    const sum = parseInt(num1) + parseInt(num2);

    // Send the sum as a JSON response
    res.json({ sum });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
