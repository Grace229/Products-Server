const { Product } = require('../models/Product');
const cloudinary = require('cloudinary').v2;
const cloudinarySetup = require('../config/cloudinarySetup');


const createNewProduct = async(req, res) => {
    let { productName, productPrice } = req.body;

    if (!productName) return res.status(400).json({ msg: 'Please upload product' });

    let image = '';

    if (req.file) {
        await cloudinarySetup();

        const uploadedMedia = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto" });

        image = uploadedMedia.secure_url;
    }

    const newProduct = new Product({
        productName,
        productPrice,
        productImage: image
    });

    if (!newProduct) return res.status(500).json({ success: false, msg: 'An error has occurred' })

    await newProduct.save();

    return res.status(201).json({
        success: true,
        msg: 'Product created',
        newProduct
    });
}

module.exports = createNewProduct;