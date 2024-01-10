// error.utils.js
const errorResponse = (res, status, message) => {
    return res.status(status).json({ error: message });
  };
  
  export default  { errorResponse };
  