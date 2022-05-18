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


let sum = 0
let count = 0
function mean(arr) {
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
        count += 1
    }
    let mean = sum / count
    return mean
}
function median(nums) {
    let sortedArr = nums.sort(function(a,b){return a-b})
    let midpoint = (sortedArr.length / 2)
    if (midpoint % 2 == 0) {
        let median = (midpoint + (midpoint + 1)) / 2
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