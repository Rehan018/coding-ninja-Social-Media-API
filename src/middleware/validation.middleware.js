
const validateInputs = (req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
      const { content } = req.body;
  
      if (!content || typeof content !== 'string') {
        return res.status(400).json({ error: 'Invalid content. Content must be a non-empty string.' });
      }
    }
    next();
  };
  
  export default validateInputs;
  