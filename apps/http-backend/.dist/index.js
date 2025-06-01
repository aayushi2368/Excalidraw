"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
app.post("/signup", (req, res) => {
    //db call
    res.json({
        message: "User created successfully"
    });
});
app.post("/signin", (req, res) => {
    const userId = 1;
    const token = jsonwebtoken_1.default.sign({
        userId
    }, config_1.JWT_SECRET);
    res.json({
        token
    });
});
app.post("/room", middleware_1.middleware, (req, res) => {
    //db call
    res.json({
        roomId: 123
    });
});
app.listen(3002);
