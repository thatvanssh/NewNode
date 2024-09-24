const express = require("express");
const router = express.Router();
// const multer = require("multer");
// const upload = multer();
const controller = require("../Controller/apis");

router.get("/",controller.rootApi);
// router.get("/userdetails",controller.finduserApi);

router.post("/rawdata",controller.rawdataApi);
// router.post("/formdata",upload.single(),controller.rawdataApi);
// router.post("/register",controller.registerApi);
// router.post("/verify",controller.registerApi);
// router.post("/login",controller.loginApi);
// router.post("/delete",controller.deleteApi);

module.exports = router;