import { Router } from "express";
import { createUser } from "../controller/authControler.js";



const router = Router();

router.post('/auth/clerk', createUser)


export default router;
