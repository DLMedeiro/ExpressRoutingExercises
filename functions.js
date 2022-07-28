function convertAndValidateNumsArray(string){
    let arr = [];

    for (let i = 0; i < string.length; i++) {
        let valNums = Number(string[i])

        if (Number.isNaN(valNums)){
            return new Error(
                `The value '${string[i]}' at index ${i} is not a valid number.`               
            );
        }
        arr.push(valNums)
    }
    return arr;
}


function mean(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    let mean = sum / arr.length
    console.log(arr.length)
    return mean
}
mean([1,2,3,4,10])

function median(nums) {
    [2,4,6,8]
    let sortedArr = nums.sort(function(a,b){return a-b})
    let midpoint = (sortedArr.length / 2)
    if (midpoint % 2 == 0) {
        let median = (sortedArr[midpoint] + (sortedArr[midpoint-1])) / 2
        return median
    } else {
        let median = sortedArr[Math.floor(midpoint)]
        return median
    }
}
function mode(nums) {
    const mode = {};
    let max = 0, count = 0;
      
    for(let i = 0; i < nums.length; i++) {
        const item = nums[i];
        
        if(mode[item]) {
        mode[item]++;
        } else {
        mode[item] = 1;
        }
        
        if(count < mode[item]) {
        max = item;
        count = mode[item];
        }
    }
        
    return max;
};


module.exports = {
    mean,
    median,
    mode,
    convertAndValidateNumsArray
  };