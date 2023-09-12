import app from './app.js'

import mongoose from 'mongoose';

// import 'dotenv/config';

console.log("hi")
// const { DB_HOST, PORT } = process.env;
const DB_HOST = 'mongodb+srv://Admin:YDDpjKIbt3sutK2a@cluster0.i3lnyr3.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log('Database connection successful');
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });