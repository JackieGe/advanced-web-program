/**
 * 谷歌面试题
 * 摘自https://zhuanlan.zhihu.com/p/21474308?refer=web-F211
 * 
 * 1024! 末尾有多少个 0？
 */

function getTrailingZero(arr) {

    var num_of_zero = 0,
        num_of_two = 0,
        num_of_five = 0;

    for (let n of arr) {
        // console.log(n)
        while (n > 0) {
            if (n % 10 === 0) {
                num_of_zero++;
                n = ~~(n / 10);
            } else if (n % 5 === 0) {
                num_of_five++;
                n = ~~(n / 5);
            } else if (n % 2 === 0) {
                num_of_two++;
                n = ~~(n / 2);
            } else {
                break;
            }
        }

    }

    console.log(num_of_zero, num_of_five, num_of_two);
    console.log('Trailing zeros: ' + (num_of_zero + Math.min(num_of_five, num_of_two)))

}

// var arr = new Int32Array(1024);
var arr = []
for (var i = 0; i < 1024; i++) {
    arr[i] = i + 1;
}
getTrailingZero(arr)

