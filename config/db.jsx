import { createPool } from "mysql2/promise"; 

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"Developer09+",
    port:"3306",
    database:"ijalti"
})

export{pool};