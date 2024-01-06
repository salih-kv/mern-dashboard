import { Product } from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const productsWithStats = await Product.aggregate([
      {
        $lookup: {
          from: "productstats", // name of product stats collection
          localField: "_id",
          foreignField: "productId",
          as: "stat",
        },
      },
    ]);

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
