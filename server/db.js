const oracledb = require('oracledb');

async function initializeDatabase() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING
    });
    console.log('Database connection established');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

module.exports = initializeDatabase;
