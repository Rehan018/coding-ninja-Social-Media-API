const errorHandler=(err,req,res,next)=>{
    console.log(err);
    const status=err.status||500;
    const message=err.message|'Internel Server Error';
    res.status(status).json({err:message});
};
export default errorHandler;