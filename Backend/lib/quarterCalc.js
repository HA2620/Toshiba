const fs = require('fs');
const csv = require('csv-parser');
const { Module } = require('module');

const datasetPath = './../asset/dataset.csv';


const data = [];

function processCSVData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(datasetPath)
      .pipe(csv())
      .on('data', (row) => {
        row.timestamp = new Date(row.Timestamp + ' UTC');
        data.push(row);
      })
      .on('end', () => {
        const downsampledData = {};

        data.forEach((row) => {
          const year = row.timestamp.getFullYear();
          const quarter = Math.floor((row.timestamp.getMonth() + 3) / 3);
          const key = `${year}-Q${quarter}`;

          downsampledData[key] = downsampledData[key] || { sum: 0, count: 0 };
          downsampledData[key].sum += parseFloat(row['Profit Percentage']);
          downsampledData[key].count += 1;
        });

        const result = Object.entries(downsampledData).map(([key, value]) => {
          const [year, quarter] = key.split('-Q');
          const average = value.sum / value.count;

          return {
            quarter: key,
            year: parseInt(year),
            quarterNumber: parseInt(quarter),
            averageProfitPercentage:parseFloat(average.toFixed(2)),
          };
        });

        resolve(result);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}
Module.exports = processCSVData;
module.exports = processCSVData;