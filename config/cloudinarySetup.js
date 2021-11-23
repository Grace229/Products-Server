const cloudinary = require('cloudinary').v2;

const cloudinarySetup = async() => {
    cloudinary.config({
        cloud_name: 'dmipjatjl',
        api_key: 427913475398917,
        api_secret: 'Rly-sRgHfUy6XKWI8m2xzXm8wfc'
    });
}

module.exports = cloudinarySetup;