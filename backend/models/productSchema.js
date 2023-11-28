const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required:true
        },
        price: {
            mrp: {
                type: Number,
                required:true
            },
            cost: {
                type: Number,
                required:true
            },
            discountPercent: {
                type: Number,
                required:true
            }
        },
        subcategory: {
            type: String,
            required:true
        },
        productImage: {
            type: String,
            required:true
        },
        category: {
            type: String,
            required:true
        },
        description: {
            type: String,
            required:true
        },
        tagline: {
            type: String,
            required:true
        },
        quantity: {
            type: Number,
            default: 1
        },
        reviews: [
            {
                rating: {
                    type: Number,
                },
                comment: {
                    type: String,
                },
                reviewer: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "customer",
                },
                date: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'seller'
        },
    }, { timestamps: true });

module.exports = mongoose.model("Product", productSchema)