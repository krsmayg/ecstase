const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Poster = require('../models/posterModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!!!'));

//READ JSON FILE
// eslint-disable-next-line prettier/prettier
const posters = JSON.parse(fs.readFileSync(`${__dirname}/posters.json`, 'utf-8'));
//Import Data in db
// eslint-disable-next-line no-unused-vars
const importData = async () => {
  try {
    await Poster.create(posters);
    console.log('Data Succesfully loaded!');
  } catch (err) {
    console.log(err);
  }
};
// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Poster.deleteMany();
    console.log('Data Succesfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
console.log(process.argv);
