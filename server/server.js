const path = require('path');
const express = require('express');

const app = express();
const public_path = path.join(__dirname, '../public');

app.use(express.static(public_path));

app.listen(PORT.env || 3000, () => {
    console.log('Listening port 3000');
})
