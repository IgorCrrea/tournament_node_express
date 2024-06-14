import { connect } from "../config/db"
import { Player } from "../entity/player";
import { CreatePlayerVO } from "../vo/create_player_vo";

export class PlayerDao {
    async getAll(){
        const con = await connect()
        const [rows] = await con.query('SELECT * FROM player')
        return rows;
    }

    async create(data: CreatePlayerVO){
        const con = await connect()
        const sql = "INSERT INTO player (name) VALUES (?)"
        const values = [data.name]
        return await con.query(sql, values)
    }

    async update(player: Player) {
        const con = await connect()
        const sql = "UPDATE player SET name = (?) WHERE id = (?);"
        const values = [player.name, player.id]
        return await con.query(sql, values)
    }

    async deleteById(id: number) {
        const con = await connect()
        const sql = "DELETE FROM player WHERE id = (?);"
        const values = [id]
        return await con.query(sql, values)
    }
}