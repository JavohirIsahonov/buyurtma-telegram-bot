const user = require('../model/user.model');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const uuid = require('uuid')


// @desc    Create user
// @route   POST /api/v1/user
// @access  Public
exports.createUser = asyncHandler(async (req, res, next) => {
    const { name, phone } = req.body;
    const userId = uuid.v4();
    const newUser = await user.create({
        name,
        phone,
        userId
    });
    res.status(201).json({
        success: true,
        data: newUser
    });
})

// @desc    Get all users
// @route   GET /api/v1/user
// @access  Public
exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await user.find();
    res.status(200).json({
        success: true,
        data: users
    });
})




