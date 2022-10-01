import { DataTypes } from 'sequelize';
import bd from '../db/conecction';

const Course = bd.define('courses', {
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
        type: DataTypes.TEXT
    }
}, {
    createdAt: false,
    updatedAt: false,
    //NOMBRE DE LA TABLA DIRECTAMENTA, SIN SEGUIR LA CONVENCIÓN
    tableName: 'cursos_zoom_uai',
});

export default Course;