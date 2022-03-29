const express = require('express');

const port = 3000;

// Define express server
const app = express();

app.get('/hello', async (req, res) => {
    return res.status(200).send('Ok');
});

// listen to requests
app.listen(port, () => console.info(`server started on port ${port}`));
