// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {pool} from "../../config/db";
export default async function handler(req:any, res:any) {
  const [rows]:any=await pool.query("SELECT NOW()")//Esto regresa la fecha y hora actual del servidor de la DATABASE
  return res.status(200).json(rows[0]['NOW()']);
}
