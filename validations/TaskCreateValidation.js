const { check } = require("express-validator");

module.exports = [
    check("title", "Title required").notEmpty(),
    check("date", "Date required").notEmpty(),
];
