import { error } from 'console';
import express, { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
const app = express()
const port = 3000

// use parser
app.use(express.json());

// Router
const userRouter = express.Router();
const courseRouter = express.Router();

app.use('/app/v1/users', userRouter);
app.use('/app/v1/courses', courseRouter);

courseRouter.post("/course-create", (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);

    res.json({
        message: "Course Created",
        data: course
    })
})

userRouter.get("/create-user", (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);

    res.json({
        message: "User successfully",
        data: user
    });
})

// Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
}

app.get('/', logger, (req: Request, res: Response, next: NextFunction) => {
    // res.send(logger)
    try {
        res.send(something);
    } catch (err) {
        console.log(err);
        next(error);
        // res.status(400).json({

        //     success: false, 
        //     message: "failed"
        // })
    }

    console.log(req.query)
})

app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: "Successfully received"
    });
})

// Custom error
app.use("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route not found"
    })
})

// Global Error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "something wroing"
        })
    }
    console.log(error);
})
export default app;
