const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            minlength: [3, "Title must be at least 3 charcters"],
        },
        price: {
            type: Number,
            required: [true, "price is required"],
            min: [0, "Price must be a positive number"],
        },
        description: {
            type: String,
            required: [true, "discription is required"],
            minlength: [10, "Discription must be at least 10 charcter"],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
            enum: ["men's clothing", "women's clothing", "electronics","jewelery"],
        },
        image: {
            type: String,
            required: [true, "Image URL is required"],
        },
        rating: {
            rate: {
                type: Number,
                required: [true, "Rating is required"],
                min: [0, "Rate cannot be below 0"],
                max: [5, "Rate cannot be above 5"],
            },
            count: {
                type: Number,
                required: [true, "Rating count is required"],
                min: [0, "Count cannot be negative"],
            },
        },
     },
     { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;