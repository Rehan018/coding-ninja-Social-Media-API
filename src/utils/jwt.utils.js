import jwt from 'jsonwebtoken';
import { token } from 'morgan';
const genrateToken=(payload)=>{
    const token =jwt.sign((payload, process.env.JWT_SECRET,{exp:'1h'}));
    return token;
};
const verifyToken=(token)=>{
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        return decoded;
    }catch(err){
        throw new Error('Invalid token');
    }
};
export default {genrateToken,verifyToken};
