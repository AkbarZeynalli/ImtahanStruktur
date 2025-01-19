import mongoose from "mongoose";

const prdouctSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
}, { collection: "Product", timestamps: true })

const Product = mongoose.model("Product", prdouctSchema);

export default Product