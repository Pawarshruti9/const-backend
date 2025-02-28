import { Router } from "express";
import isAuthenticatedUser from "../middleware/Auth.js";
import {changeStatusInprogress, changeStatusStarted, getResult } from "../controllers/testController.js";

const router = Router();

//route to get the result of the test,pass testid and ueranswers in the body
router.route("/asses").post(isAuthenticatedUser,getResult);
router.route("/statusinprogress").post(isAuthenticatedUser,changeStatusInprogress);
router.route("/statusstarted").post(isAuthenticatedUser,changeStatusStarted);

export default router;