const {
    mean,
    median,
    mode,
} = require('./functions')

describe("#mean", function() {
    it ("finds the mean of an array", function(){
        expect(mean([1,2,3,4,10])).toEqual(4)
    })
})
describe("#median", function() {
    it ("finds the median of an even array", function(){
        expect(median([2,4,6,8])).toEqual(5)
    })
    it ("finds the median of an odd array", function(){
        expect(median([4,6,8])).toEqual(6)
    })
})
describe("#mode", function() {
    it ("finds the mode", function(){
        expect(mode([2,4,4,8])).toEqual(4)
    })
})