const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());


// Sample product data
let products = [
    { id: 143, name: 'Notebook', price: 5.49 },
    { id: 144, name: 'Black Marker', price: 1.99 }
];


//Add all the REST API end-points here




// Start the server
app.listen(port, () => {
    console.log(`Product server running at http://localhost:${port}`);
});
