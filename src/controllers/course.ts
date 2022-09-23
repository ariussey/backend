import { Request, Response } from 'express';
import Course from '../models/course';

export const getCourses = async (req: Request, res: Response) => {

    const listCourses = await Course.findAll();

    res.json({
        listCourses
    })
}


export const getCourse = async (req: Request, res: Response) => {

    const { id } = req.params;
    const course = await Course.findByPk(id);

    if(course) {
        res.json(course)
    } else {
        res.status(404).json({
            msg: `No existe curso con el id ${id}`
        })
    }
}


export const deleteCourse = async (req: Request, res: Response) => {

    const { id } = req.params;
    const course = await Course.findByPk(id);

    if(!course){
        res.status(404).json({
            msg: `No existe curso con el id ${id}`
        }) 
    } else {
        await course.destroy();
        res.json({
            msg: 'El producto fue eliminado correctamente'
        })
    }

}


export const postCourse = async (req: Request, res: Response) => {

    const { body } = req;
    
    try {
        await Course.create(body);
    
        res.json({
            msg: 'El curso fue agregado correctamente',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con el soporte de TI',
        })
    }
}


export const updateCourse = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { body } = req;

    try {

        const course = await Course.findByPk(id);

        if(course){
            await course.update(body);
            res.json({
                msg: 'El curso fue actualizado correctamente'
            })
        } else {
            res.status(404).json({
                msg: `No existe curso con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con el soporte de TI',
        })
    }
}
