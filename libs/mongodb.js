const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongoDB Cenected");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDB;
