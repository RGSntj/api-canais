import mysql2 from 'mysql2/promise'

export const db = await mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "db_televisao"
})

console.log("-> Conectado no DB !");