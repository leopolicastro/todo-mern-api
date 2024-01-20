const mongoose = require('mongoose');

try {
  console.log('Connecting to MongoDB...', process.env.MONGODB_URL);
  mongoose.connect(process.env.MONGODB_URL, {});
  console.log('Connected to MongoDB');
} catch (error) {
  console.log(`Error: ${error}`);
}
