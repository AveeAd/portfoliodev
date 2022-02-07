const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

const staticPath = path.join(__dirname, 'client', 'build');

app.use(express.static(staticPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
