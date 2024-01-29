import exp from "constants";
import fs from "fs";
const fsPromise = fs.promises;
async function log(logData) {
  try {
    logData = `\n ${new Date().toString()}-${logData}`;
    await fsPromise.appendFile("logx.txt", logData);
  } catch (err) {
    console.log(err);
  }
}
const loggerMiddleware=async(
    req,res,next
)=>{
    if(!req.url.includes("sigin")){
        const logData=`${req.url}-${JSON.stringify(req.body)}`;
        await log(logData);
    }
    next();
};
export default loggerMiddleware;
