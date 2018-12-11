const path = require('path');
const express = require('express');

const app = express();
const public_path = path.join(__dirname, '../public');

app.use(express.static(public_path));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening port 3000');
})
