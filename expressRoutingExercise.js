const express = require('express');
const ExpressError = require('./expressError')
const app = express();
app.use(express.json());
app.unsubscribe(express.urlencoded({extended:true}));

const { convertAndValidateNumsArray, mean, median, mode } = require('./functions');

app.get('/mean', (req, res, next) => {
    // http://localhost:3000/mean?nums=1,3,5,7
    let string = req.query.nums.split(',');
    // console.log(string)
    // ['1', '2', '3']
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let nums = convertAndValidateNumsArray(string)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 404);
    }

    let answer = {
        operation: 'mean',
        result: mean(nums)
    }

    return res.send(answer)
        // console.log(result)
        // [1,2,3]
});

app.get('/median', (req, res, next) => {

    let string = req.query.nums.split(',');
    // console.log(string)
    // ['1', '2', '3']
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let nums = convertAndValidateNumsArray(string)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 404);
    }

    let answer = {
        operation: 'median',
        result: median(nums)
    }

    return res.send(answer)
        // console.log(result)
        // [1,2,3]
});

app.get('/mode', (req, res, next) => {

    let string = req.query.nums.split(',');
    // console.log(string)
    // ['1', '2', '3']
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let nums = convertAndValidateNumsArray(string)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 404);
    }

    let answer = {
        operation: 'mode',
        result: mode(nums)
    }

    return res.send(answer)
        // console.log(result)
        // [1,2,3]
});


/** general error handler */

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
    
    return next(err)
    });
    
/** general error handler */
    
app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
        status: err.status
    })
});

app.listen(3000, function() {
    console.group('App on port 3000');
})