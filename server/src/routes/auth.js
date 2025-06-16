import { Router } from "express";
import { createUser, getProtectedData } from "../controller/authControler.js";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';



const router = Router();

router.post('/auth/clerk', createUser)
router.get('/auth/clerk_jwt', ClerkExpressRequireAuth, getProtectedData)

export default router;
