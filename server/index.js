import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// DATA IMPORTS
import { User } from "./models/user.js";
import { Product } from "./models/product.js";
import { ProductStat } from "./models/productStat.js";
import { Transaction } from "./models/transaction.js";
import { OverallStat } from "./models/overallStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
} from "./data/index.js";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

// ROUTES
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`));

    /** ONLY ADD DATA ONE TIME */
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
  })
  .catch((error) => console.log(error));
