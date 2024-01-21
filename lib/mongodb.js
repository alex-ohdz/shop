// import mongoose from "mongoose";

// let isConnected;

// export const connectMongoDB = async () => {
//   if (isConnected) {
//     console.log("Using existing database connection");
//     return;
//   }

//   try {
//     const db = await mongoose.connect(process.env.MONGODB_URI);
//     isConnected = db.connections[0].readyState;
//     console.log("Connected to MONGODB");
//   } catch (error) {
//     console.log("Error connecting to database: ", error);
//   }
// };
import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("Using existing database connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    throw error; // Lanzar el error para manejarlo en una capa superior si es necesario
  }
};

