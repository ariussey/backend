import { DataTypes } from 'sequelize';
import bd from '../db/conecction';

const Course = bd.define('course', {
    id_horario: {
        type: DataTypes.INTEGER
    },
    enlace_zoom: {
        type: DataTypes.TEXT
    },
    id_zoom: {
        type: DataTypes.STRING
    },
    clave_zoom: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Course;