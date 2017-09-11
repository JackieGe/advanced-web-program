// '.00'

Number.prototype.Format = function (fmt) {
    if (/(\.0+)/.test(fmt)) {
        // return this.toFixed(RegExp.$1.length - 1)
        var tmp = ~~(this * Math.pow(10, RegExp.$1.length));
        if (tmp % 10 > 4) {
           tmp = ~~(tmp/10) + 1
        } else {
            tmp = ~~(tmp/10);
        }

        return tmp / Math.pow(10, RegExp.$1.length - 1)
    }
    return "";
}

console.log(2.353.Format('.00'))
// 3700s
// 3700%60/60 * 360
// minute: 3700 % 3600 / 3600 * 360
// 3700 % (3600* 12) / (3600* 12) * 360