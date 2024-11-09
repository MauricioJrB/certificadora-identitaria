import express from "express";
import SuperUserController from "../controllers/SuperUserController.js";

const router = express.Router();

router.get("/admin/create", SuperUserController.createSuperUser);
router.post("/admin/login", SuperUserController.loginSuperUser);

export default router;