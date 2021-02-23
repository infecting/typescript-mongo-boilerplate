import {Request, Response} from 'express';

export let test = async(req:Request, res: Response) => {
    res.send("Hello from test")
}