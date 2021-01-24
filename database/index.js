const mongoose = require('mongoose');
const config = require('./config.js');

mongoose.connect(config.mongoURI || 'mongodb://localhost/test', {
  useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', () => {
  console.log('error connecting to db');
});
db.once('open', () => {
  console.log('connected to database');
});

const modelNameSchema = new mongoose.Schema({
  valueName: String,
  valueName2: Number
});

const modelName = mongoose.model('modelName', modelNameSchema);


const create = (data) => {
  modelName.create(data);
};


module.exports = {
  create: create
};