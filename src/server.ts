require('dotenv').config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // Importe o Mongoose
import { MongoStore } from 'wwebjs-mongo'; // Importe o MongoStore
import router from "./routes";

const PORT = 3333;
const MONGO_URL = process.env.DB_URL // URL do banco de dados MongoDB

const app = express();

app.use(cors());
app.use(express.json());

// Conectar ao MongoDB 
console.log(MONGO_URL,  `URL here`)
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true } as any)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log("Server is running!"));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error)
  });

// Utilize as rotas da API
app.use('/api', router);
