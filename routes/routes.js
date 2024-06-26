import express from "express";
import {uploadimg,downloadimg} from "../controller/image-controller.js";
// import upload from "../utils/upload.js";
import multer from 'multer';

// const upload = multer({ dest: 'uploads' })


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null,'./uploads')
    },
    filename: function (req, file, cb){
        return cb(null,`${Date.now()} - ${file.originalname}`)
    },
});

const upload=multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 100}
});  
//limits: { fileSize: 1024 * 1024 * 1 } 1MB

const router=express.Router();

router.post("/upload",upload.single('file'),uploadimg);
router.get("/file/:fileId",downloadimg)

export default router;
