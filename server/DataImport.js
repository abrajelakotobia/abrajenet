import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import Product from "./Models/ProductModel.js";
import products from "./data/Products.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
  "/user",
asyncHandler( async (req, res) => {
  try {
    await User.deleteMany({}); // Utilisez deleteMany() pour supprimer tous les documents de la collection User
    const importUser = await User.insertMany(users);
    res.status(200).json({ importUser });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
})
);
ImportData.post(
  "/products", 
  asyncHandler( async (req, res) => {
  try {
    await Product.deleteMany({}); // Utilisez deleteMany() pour supprimer tous les documents de la collection Product
    const importProducts = await Product.insertMany(products);
    res.status(200).json({ importProducts });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
})
);
export default ImportData;
