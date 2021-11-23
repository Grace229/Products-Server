const express = require('express');
const router = express.Router();
const upload = require('../../config/multerSetup');


const createProduct = require('../../controllers/createProduct');
const getAll = require('../../controllers/getProducts');


router.route('/')
    .post(upload.single('postMedia'), createProduct)
    .get(getAll);


module.exports = router;