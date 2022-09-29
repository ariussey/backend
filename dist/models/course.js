"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conecction_1 = __importDefault(require("../db/conecction"));
const Course = conecction_1.default.define('course', {
    id_horario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    enlace_zoom: {
        type: sequelize_1.DataTypes.TEXT
    },
    id_zoom: {
        type: sequelize_1.DataTypes.STRING
    },
    clave_zoom: {
        type: sequelize_1.DataTypes.TEXT
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Course;
