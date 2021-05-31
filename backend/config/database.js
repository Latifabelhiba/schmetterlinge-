import mysql from "mysql2";
 
// create the connection to database
const db = mysql.createConnection({
  port: 8889,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'schmetterlinge'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

export default db;