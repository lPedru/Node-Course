const express = require('express');

//cluster.schedulingPolicy = cluster.SCHED_RR;

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    //* blocked event loop
  }
}

app.get('/', (req, res) => {
  res.send(`Perfomance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(4000);
  res.send(`Timer test: ${process.pid}`)
});

console.log('Worker has been started...');
app.listen(3000);
