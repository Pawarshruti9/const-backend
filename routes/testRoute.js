import { Router } from "express";
import isAuthenticatedUser from "../middleware/Auth.js";
import { getResult } from "../controllers/testController.js";

const router = Router();

//route to get the result of the test,pass testid and ueranswers in the body
router.route("/asses").post(getResult);

export default router;