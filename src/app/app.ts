import express, {Request, Response} from 'express';
import { NextFunction } from 'express-serve-static-core';
const app = express()
const port = 3000

// use parser
app.use(express.json());
// Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
}

app.get('/', logger, (req : Request, res : Response) => {
    // res.send(logger)
  res.send(req.params);
  console.log(req.query)
})

app.post('/', logger, (req: Request, res: Response) =>{
    console.log(req.body);
    res.json({
        message: "Successfully received"
    });
})

export default app;
