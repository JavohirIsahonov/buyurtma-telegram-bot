const project = require('../model/project.model');
const asyncHandler = require('../middlewares/async');
const errorResponse = require('../utils/errorResponse');
const uploadToCloudinary = require('../utils/cloudinary');
const upload = require('../middlewares/upload');


// @desc    Get all projects
// @route   GET /api/projects/all
// @access  Public
exports.getProjects = asyncHandler(async (req, res, next) => {
    const projects = await project.find();

    res.status(200).json({
        success: true,
        count: projects.length,
        data: projects
    });
});

// @desc    create new project
// @route   POST /api/projects/create
// @access  Private
exports.createProject = [upload.single('image'), asyncHandler(async (req, res, next) => {
    if (!req.file) {
        return next(new errorResponse('Iltimos rasm yuklang', 400));
    }

    try {
        const imageUrl = await uploadToCloudinary(req.file.path);
        const projectData = {
            ...req.body,
            image: imageUrl
        };

        const newProject = await project.create(projectData);
        res.status(201).json({
            success: true,
            data: newProject
        });
    } catch (error) {
        return next(new errorResponse(error.message, 500));
    }
})];

