import catchAsyncError from "../middleware/catchAsyncError.js"
import quiz from "../config/quizStore.js";
import { ApiError } from "../utils/ApiError.js";

const getResult = catchAsyncError(async (req, res, next) => {
    const { quizId, userAnswers } = req.body;
    if (!quiz[quizId]) {
        return next(new ApiError(400, "Please Enter Valid test Id"));
    }
    const correctAnswers = quiz[quizId];
    let score = 0;
    correctAnswers.forEach((answer, index) => {
        if (answer === userAnswers[index]) {
            score += 1;
        }
    });
    const isPassed = score >= 7;

    res.json({
        quizId,
        score,
        isPassed,
        message: isPassed ? "Congratulations! You passed." : "Try again! You failed."
    });

})

export {getResult}