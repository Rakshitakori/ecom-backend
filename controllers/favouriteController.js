const Favourite = require("../models/Favourites");
const Product = require("../models/Product");

const addToFavourite = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const existingItem = await Favourite.findOne({
      product: product._id,
      user: req.user.userId,
    });

    if (existingItem) {
      return res.status(400).json({
        message: "Product already added to favourites",
      });
    }

    await Favourite.create({
      product: product._id,
      user: req.user.userId,
    });

    res.status(200).json({
      message: "Product added to favourites successfully",
    });
  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};