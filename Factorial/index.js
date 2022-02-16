
// 階層迴圈解法
function Factorial(number) {
    let total = 1;

    for(let i = number; i > 0; i --) {
        total *= i;
    }

    return total;
}

// 階層遞迴解法
function FactorialRecursive(number) {
    if(number > 1) {
        return number * calres(number - 1);
    }else if(number === 1) {
        return 1; 
    }
}

