const count_array = (arr, target) => {
let nums = 0;
for(let i = 0; i < arr.length - 1; i++){
    for(let j = 1 + 1; j < arr.length; j++){
        if(Math.abs(arr[i] - arr[j]) === target) nums += 1
    }
}
return nums
}

console.log(count_array([1, 5, 3, 4, 2]));