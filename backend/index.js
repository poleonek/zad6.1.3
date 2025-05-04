const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

const pool = mysql.createPool(dbConfig);

app.post('/api/create-table', (req, res) => {
   pool.getConnection((err, connection) => {
    if (err) {
       console.error('Database connection error:', err);
       res.status(500).json({ error: 'Connection failed', details: err.message });
       return;
    }
     connection.query(`
      CREATE TABLE IF NOT EXISTS my_table (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        value VARCHAR(255) NOT NULL
      )
     `,(createTableErr) => {
        connection.release();
        if(createTableErr){
           console.error("Error creating table",createTableErr);
           res.status(500).json({error:"Table creation failed", details: createTableErr.message});
           return;
        }
        res.status(201).json({message: "Table my_table created successfully"});
     });
   });
});

app.post('/api/add', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection error:', err);
      res.status(500).json({ error: 'Connection failed', details: err.message }); // Send JSON error
      return;
    }
    if (!req.body) {
      console.log(req);
      return res.status(400).json({ error: 'Missing data', details: 'Request body not found' });
    }

    const newData = {
      name: req.body.name,
      value: req.body.value
    };

    if (!newData.name || !newData.value) {
      connection.release();
      return res.status(400).json({ error: 'Missing data', details: 'Please provide both name and value in the request body.' });
    }
    const query = 'INSERT INTO my_table (name, value) VALUES (?, ?)';
    const values = [newData.name, newData.value];

    connection.query(query, values, (queryErr, results) => {
      connection.release();

      if (queryErr) {
        console.error('Error inserting data:', queryErr);
        res.status(500).json({ error: 'Insert failed', details: queryErr.message });
        return;
      }

      res.status(201).json({ message: 'Data inserted successfully', results: results });
    });
  });
});

app.get('/api/access_db_endpoint', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection error:', err);
      res.status(500).json({ error: 'Connection failed', details: err.message });
      return;
    }

    connection.query('SELECT * FROM my_table', (queryErr, results) => {
      connection.release();

      if (queryErr) {
        console.error('Error querying the database:', queryErr);
        res.status(500).json({ error: 'Query failed', details: queryErr.message });
        return;
      }

      res.json(results);
    });
  });
});

app.get('/api/basic_endpoint', (req, res) => {
  console.log('Request received');
  res.send("Connection is working!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
