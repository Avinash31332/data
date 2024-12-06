const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    // Remove useNewUrlParser and useUnifiedTopology
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};

module.exports = connectToDB;
