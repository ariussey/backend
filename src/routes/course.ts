import { Router } from 'express';
import { deleteCourse, getCourse, getCourses, postCourse, updateCourse } from '../controllers/course';

const router = Router();

router.get('/', getCourses);

router.get('/:id', getCourse);

router.delete('/:id', deleteCourse);

router.post('/', postCourse);

router.put('/:id', updateCourse);

export default router;