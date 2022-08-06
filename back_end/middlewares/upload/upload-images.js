//upload file
const multer = require("multer");
const mkdirp = require('mkdirp')

const uploadImages=(type)=>{
  const made = mkdirp.sync(`./public/images/${type}`)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./public/images/${type}`); //setup cho can luu file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname); //dat lai ten cho file
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const extensionsImages = [".png", ".jpg", ".gif"];
 
    const extension = file.originalname.slice(-4);
    const check = extensionsImages.includes(extension);
    if (check) {
      cb(null, true);
    } else {
      cb(new Error("Extension khong hop le"));
    }
  },
});
return upload.single(type);
}

module.exports={
    uploadImages
}