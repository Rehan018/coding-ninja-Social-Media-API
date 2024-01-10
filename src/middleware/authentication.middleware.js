import jwt from 'jsonwebtoken';
import errorResponse  from '../utils/error.utils.js';
const authenticationToken=(req,res,next)=>{
    const token=req.header("Authorization");

    if(!token){
        return errorResponse(res,401,'Unauthorized-Missing token');
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return errorResponse(res, 403, 'Forbidden - Invalid token');
        }
        req.user=user;
        next();
    });
};
export default authenticationToken;