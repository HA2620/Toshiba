const express = require('express');
const processCSVData = require('../lib/quarterCalc');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

app.get("/graph-data", function (req, res) {
    processCSVData()
        .then((result) => {
            console.log("Sending successfully");
            // console.log(result);
            res.send(result)
        })
        .catch((error) => {
            console.error('Error processing CSV data:', error);
        });

})
app.listen(3000, function (req, res) {
    console.log("Server running on server 3000");
})

