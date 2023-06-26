const { validationResult } = require("express-validator");
const Task = require("../models/Task");

exports.list = async (req, res, next) => {
    let status, statusCode, data;
    try {
        const result = await Task.find({});
        status = true;
        statusCode = 200;
        data = result;
    } catch (error) {
        status = false;
        statusCode = 500;
        data = null;
    }

    return res.status(statusCode).json({
        status: status,
        data: data,
    });
};

exports.create = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            data: errors.array(),
        });
    }

    let status, statusCode, data;
    try {
        const { title, date } = req.body;
        const response = await Task.create({
            title: title,
            dueData: date,
        });
        status = true;
        statusCode = 200;
        data = response;
    } catch (error) {
        status = false;
        statusCode = 500;
        data = null;
    }

    return res.status(statusCode).json({
        status: status,
        data: data,
    });
};
