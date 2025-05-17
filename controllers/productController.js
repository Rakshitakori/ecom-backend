const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find();

        res.status(200).json(products);
    }catch(error){
        console.log("Error:",error.message);
        res.status(500).json({
            message: "Internal server error",
});
    }
};

const getProductById = async (req, res) => {
    try{
        const { productId } = req.params;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"

            });
        }
        res.status(200).json(product);
    }catch(error){
        console.log("Error:",error.message);
        res.status(500).json({
            message: "Internal server error",
});
 }
};

const createProduct = async (req, res) => {
    try {
        const productData = req.body;

        const newProduct = await Product.create(productData);

        res.status(201).json({
            message: "Product Created",
        });
    }catch(error){
        console.log("Error:",error.message);
        res.status(500).json({
            message: "Internal server error",
});
    }
};
const updateProduct = async (req, res) => {
    try{
        const { productId } = req.params;
        const productData = req.body;

        const updateProduct = await Product.findByIdAndUpdate(
            productId,
            productData,
            {
                new: true,
            }
        );
        res.status(200).json({
            message: "Product updated succesfully",
        });
    }catch(error){
        console.log("Error:",error.message);
        res.status(500).json({
            message: "Internal server error",
});
    }
};

const deleteProduct = async (req, res) => {
    try{
        const { productId } = req.params;

        const product = await Product.findByIdAndDelete(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            })
        }
        res.status(204).json({
            message: "Product deleted succcessfully",
        });
    }catch(error){
        console.log("Error:",error.message);
        res.status(500).json({
            message: "Internal server error",
});
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
