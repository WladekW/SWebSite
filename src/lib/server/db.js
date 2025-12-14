import Database from "better-sqlite3";

const db = new Database("src/lib/server/db.sqlite");
db.pragma("journal_mode = WAL");

// db.prepare(
//   `
//   CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT DEFAULT (date()), title TEXT, description TEXT)
//   `,
// ).run();


export default db;
