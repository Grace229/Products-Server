const express = require('express');
const router = express.Router();
const upload = require('../../config/multerSetup');


const createProduct = require('../../controllers/createProduct');


router.route('/')
    .post(upload.single('postMedia'), createProduct)


module.exports = router;