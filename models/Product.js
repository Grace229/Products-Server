const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let productSchema = new Schema({
    productName: String,
    productPrice: String,
    productImage: String,
}, { timestamps: true });

module.exports = {
    Product: model('product', productSchema)
}