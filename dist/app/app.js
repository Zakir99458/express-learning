"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// use parser
app.use(express_1.default.json());
// Middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    // res.send(logger)
    res.send(req.params);
    console.log(req.query);
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Successfully received"
    });
});
exports.default = app;
