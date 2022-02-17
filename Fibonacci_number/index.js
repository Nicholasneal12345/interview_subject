
// 迴圈解法
function cal(number) {
    let newArr = [0, 1];

    if(number < 2) {
        return number;
    }else {
        for(let i = 2; i <= number; i++) {
            newArr.push(newArr[i - 1] + newArr[i - 2]);
        }
        
        return newArr[number];
    }
}

// 遞迴解法
// 除了0跟1之外剩下的數字都是(n-1)+(n-2)
// 另外把所有的數字都拆成最小的0跟1，然後在全部相加起來。
// 比如4的話就是3的結果加上2的結果，然後3又是2的結果加上1的結果，2的結果是1的結果加上0的結果也就是0+1，最後全部加回去就是答案了
function calres(number) {
    if(number < 2) {
        return number;
    }else {
        return calres(number - 1) + calres(number - 2);
    }
}
