const { validationResult } = require("express-validator");
const Task = require("../models/Task");

exports.list = async (req, res, next) => {
    let status, statusCode, data;
    try {
        const result = await Task.find({}).sort({ createdAt: -1 });
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

exports.find = async (req, res, next) => {
    const _id = req.query.id;
    let status, statusCode, data;
    try {
        const result = await Task.findOne({ _id: _id });
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
            dueDate: new Date(date),
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

exports.update = async (req, res, next) => {
    try {
        const { id: _id, title, date } = req.body;
        const result = await Task.findOneAndUpdate(
            { _id: _id },
            { $set: { title: title, dueDate: new Date(date) } },
            { new: true }
        );
        return res.status(200).json({
            status: true,
            data: result,
        });
    } catch (error) {
        return res.status(200).json({
            status: false,
            data: null,
            error: JSON.stringify(error),
        });
    }
};

exports.deleteList = async (req, res, next) => {
    try {
        const _id = req.body.id;
        const result = await Task.deleteOne({ _id: _id });
        return res.status(200).json({
            status: true,
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            data: error,
        });
    }
};
