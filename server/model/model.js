// Requiring module
const mongoose = require('mongoose');
    
// Course Modal Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
    
// Course Modal Schema
const productSchema = new mongoose.Schema({
  title: String,
  text: String,
  src: String,
  alt: String
});

const logEntrySchema = new mongoose.Schema({
  datetime: String,
  ipAddress: String,
  location: Object,
  action: String,
});
     
// Creating model objects
const User = mongoose.model('users', userSchema);
const Product = mongoose.model('products', productSchema);
const LogEntry = mongoose.model('logs', logEntrySchema);
    
// Exporting our model objects
module.exports = {
    User, Product, LogEntry
}