/**
 * 谷歌面试题
 * 摘自https://zhuanlan.zhihu.com/p/21474308?refer=web-F211
 * 
 * 一个整数数列，元素取值可能是 1~N（N 是一个较大的正整数）中的任意一个数，相
    同数值不会重复出现。
    设计一个算法，找出数列中符合条件的数对的个数，满足数对中两数的和等于 N+1。
    复杂度最好是 O(n)，如果是 O(n2)则不得分。 
 */

 

// 假定arr無重複數據
function getNumbersPairWithSum(arr, matchingSum) {
    var set = new Set(arr);
    var ret = [];
    for (let n of arr) {
        var n2 = matchingSum - n;
        if (set.has(n2)) {
            ret.push([n, n2]);
            set.delete(n)
            set.delete(n2)
        }
    }
    return ret;
}

var N = 100;
var arr = new Set();
for (var i = 0; i < N; i++) {
    arr.add(~~(Math.random() * N));
}

console.log(arr.size)
var ret = getNumbersPairWithSum(arr, N + 1)
console.log(ret.length)
console.log(ret)