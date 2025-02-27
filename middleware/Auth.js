import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { ApiError } from '../utils/ApiError.js';
import catchAsyncError from './catchAsyncError.js';
const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    console.log(req)
    const { accessToken } = req.cookies;
    if (!accessToken) {
        return next(new ApiError(401, "Please LogIn to access the requested resource"));
    }
    const decodedData = jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY);
    req.user = await User.findById(decodedData._id);
    next();
});
export default isAuthenticatedUser;