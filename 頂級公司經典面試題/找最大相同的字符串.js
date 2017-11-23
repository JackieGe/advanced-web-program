/**
 * 雅虎面试题
 * 摘自https://zhuanlan.zhihu.com/p/21474308?refer=web-F211
 * 
 * 编程实现：找出两个字符串中最大公共子字符串,如"abccade","dgcadde"的最大子串为"cad" 
 */

 
function findMaxCommonString(str1, str2) {
    var start = 0, len = 0;

    for (var i = 0; i < str1.length; i++) {
        var currPosi = i;
        var newSubLen = 0;
        var c1 = str1[currPosi];
        for (var j = 0; j < str2.length; j++) {
            if (c1 === str2[j]) {
                newSubLen++;
                currPosi++;
                c1 = str1[currPosi];
            } else if (newSubLen > 0) {
                break;
            }
        }
        if (len < newSubLen) {
            start = i;
            len = newSubLen;
        }
    }


    return { sub: str1.substr(start, len), start, len }

}

var ret = findMaxCommonString("abccade", "dgcadde")
console.log(ret)