export default function handler(req,res)
{
    return res.status(200).json("Obeteniendo info del usuario: "+req.query.id);
}
