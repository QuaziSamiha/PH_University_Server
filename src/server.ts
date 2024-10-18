import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('mongo db connected successfully samiha');
    app.listen(config.port, () => {
      console.log(
        `Express application listening on port ${config.port} vutu vai`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`);
// });
