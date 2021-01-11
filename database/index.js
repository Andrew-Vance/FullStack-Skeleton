const mongoose = require('mongoose');
const config = require('./config.js');

mongoose.connect(process.env.MONGO_URI || config.mongoURI || 'mongodb://localhost/test', {
  useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', () => {
  console.log('error connecting to db');
});
db.once('open', () => {
  console.log('connected to database');
});

const modelNameShema = new mongoose.Schema({
  valueName: String,
  valueName2: Number
});

const modelName = mongoose.model('modelName', modelNameShema);


const create = (data) => {
  modelName.create(data);
};


module.exports = {
  create: create
};