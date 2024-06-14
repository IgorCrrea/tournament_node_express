import { NextFunction, Request, Response } from "express";
import { PlayerDao } from "../dao/player_dao";
import { Player } from "../entity/player";
import { CreatePlayerVO } from "../vo/create_player_vo";

export class PlayerController {

    constructor(private playerDao: PlayerDao) {
        console.log("Create PlayerController")
    }

    public listAll (req: Request, res: Response, next: NextFunction): void {
        this.playerDao.getAll().then((ret) => {
            res.json(ret)
        }).catch((err) => {
            next(err)
        })
    }

    public create (req: Request, res: Response, next: NextFunction): void {
        this.playerDao.create(req.body as CreatePlayerVO).then((ret) => {
            res.statusCode = 201
            res.json(ret[0]["insertId"])
        }).catch((err) => {
            next(err)
        })
    }

    public update (req: Request, res: Response, next: NextFunction): void {
        const player: Player = req.body
        this.playerDao.update(player).then((ret) => {
            this.checkeIfAnyRowsHaveBeenModified(ret[0].affectedRows, player.id)
            res.status(204).json();
        }).catch((err) => {
            next(err)
        })

    }

    public delete(req: Request, res: Response, next: NextFunction): void {
        const playerId = req.body.id
        this.playerDao.deleteById(playerId).then((ret) => {
            this.checkeIfAnyRowsHaveBeenModified(ret[0].affectedRows, playerId)
            res.status(204).json();
        }).catch((err) => {
            next(err)
        })
    }

    private checkeIfAnyRowsHaveBeenModified(affectedRowsQty: number, playerId: number): void {
        if (affectedRowsQty) {
           return 
        } else {
            const error = new Error(`User with id ${playerId} not found`);
            error['status'] = 404;
            throw error;
        }
    }

}
