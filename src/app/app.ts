import express, {Request, Response} from 'express';
const app = express()
const port = 3000

// use parser
app.use(express.json());

app.get('/', (req : Request, res : Response) => {
  res.send('Hello world!!!!')
})

app.post('/', (req: Request, res: Response) =>{
    console.log(req.body);
    res.json({
        message: "Successfully received"
    });
})

export default app;
