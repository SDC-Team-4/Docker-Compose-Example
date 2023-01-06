/* ==================== Dependencies ==================== */

const cors = require('cors');
const { Pool } = require('pg');
const express = require('express');

/* ==================== Initialize Pool ==================== */

const pool = new Pool({ connectionString: process.env.connectionString });
const port = process.env.PORT;

/* ==================== Initialize Express ==================== */

const app = express();

/* ==================== Middleware ==================== */

app.use(cors());
app.use(express.json());

/* ==================== Routes ==================== */

app.get('/hello', (req, res) => {
  console.log('request received');
  pool
    .query(`SELECT * FROM hello`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

/* ==================== Listener ==================== */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
