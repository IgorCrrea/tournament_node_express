import { Request, Response } from "express";

export class HomeController {

    public getIndex (req: Request, res: Response) {
        const data = {message: "Hello World"}
        res.json(data)
    }
    
    public postIndex (req: Request, res: Response) {
        console.log(req.params.id)
        res.json({...req.body})
    }
}
