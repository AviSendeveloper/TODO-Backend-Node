const Task = require('../models/Task');

exports.create = (req, res, next) => {
    // const {title, date} = req.body
    return res.send(req.body);
}