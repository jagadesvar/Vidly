const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
  const db = process.env.MONGO_URI || config.get('db');

  // 👇 DEBUG LOGS – must appear in Render logs
  console.log('DB URL from db.js =', db);

  mongoose
    .connect(db)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
      console.error('❌ Could NOT connect to MongoDB');
      console.error(err);
    });
};
