const express = require('express');
const app = express();
const PORT = 3000; // You can change the port if needed

// Define a route to handle GET requests to '/sum'
app.get('/sum', (req, res) => {
    // Extract two numbers from query parameters
    const { num1, num2 } = req.query;

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
