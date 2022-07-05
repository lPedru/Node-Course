const express = require('express');
const cluster = require('cluster');
const os = require('os');

cluster.schedulingPolicy = cluster.SCHED_RR;

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
  delay(9000);
  res.send(`Timer test: ${process.pid}`)
});


if (cluster.isMaster) {
  console.log('Master has been started...');
  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log('Worker has been started...');
  app.listen(3000);
}