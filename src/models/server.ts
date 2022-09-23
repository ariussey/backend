import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routeCourse from '../routes/course';
import db from '../db/conecction';

class Server {
    private app: Application;
    private port: string;


    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicación correindo en el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response)=> {
            res.json({
                msg: 'API WORKING'
            })
        })

        this.app.use('/api/courses', routeCourse);
    }

    midlewares(){
        //Parseamos el body
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    async dbConnect(){
        
        try {
            
            await db.authenticate();
            console.log('base de datos conectada c:');

        } catch (error) {
            console.log(error);
            console.log('Error al conectarse con la base de datos');
        }
    }

}

export default Server;