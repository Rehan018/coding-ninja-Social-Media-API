import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './src/uploads');
  },
  filename: (req, file, callback) => {
    callback(null, new Date().toISOString + file.originalname);
  },
});
const upload = multer({ storage: storage });
export default upload;
