import express from "express";
import {uploadimg,downloadimg} from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router=express.Router();

router.post("/upload",upload.single('file'),uploadimg);
router.get("/file/:fileId",downloadimg)

export default router;
