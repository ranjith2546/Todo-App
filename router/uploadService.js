
const express = require('express');
const router = express.Router();

var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
});

var upload = multer({ storage: storage });

router.get('/',(req,res) => {
     res.render('upload');
});

router.post('/',upload.array('files'), (req,res) => {
    
    res.send("File upload sucessfully.");
});


module.exports = router;



