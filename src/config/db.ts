import mysql from 'mysql2/promise'

export async function connect(){
    try{
        if(global.connection && global.connection.state !== 'disconnected'){
            return global.connection
        }
        //"mysql://<usuario>:<senha>@<ip>:<porta>/<schema>"
        const connection = await mysql.createConnection("mysql://root:1234@localhost:3306/game_play_db")
        global.connection = connection
        return connection

    } catch(err) {
        console.log(err)
    }
}