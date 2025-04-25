const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file, {
            folder: 'projects',
            use_filename: true
        });
        return result.secure_url;
    } catch (error) {
        throw new Error('Rasmni yuklashda xatolik yuz berdi');
    }
};

module.exports = uploadToCloudinary;