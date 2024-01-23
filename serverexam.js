const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

let latestSensorData = null;

app.post('/uploadData', (req, res) => {
    const sensorData = req.body.sensorData;
    console.log('Received data from ESP32:', sensorData);
    latestSensorData = sensorData;
    res.send('Data received successfully!');
});

app.get('/getSensorData', (req, res) => {
    res.json({ sensorData: latestSensorData });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
