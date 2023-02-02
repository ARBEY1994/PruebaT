const { Router } = require("express");
const estudianteRoute = require("./estudianteR");
const GradosRoute = require("./gradosM");
const router = Router();

router.use("/estudiante", estudianteRoute);
router.use("/grados", GradosRoute);

module.exports = router;
