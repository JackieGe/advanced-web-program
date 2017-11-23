
function insertSort(str) {
    for (var i = 1; i < str.length; i++) {
        var i_char = str[i];
        var i_charCode = i_char.charCodeAt(0);
        if (65 <= i_charCode && i_charCode <= 92) {
            var k = i;
            while (k--) {
                var k_code = str[k].charCodeAt(0);
                if (65 <= k_code && k_code <= 92) {
                    break;
                }
            }

            for (j = i; j > k + 1; j--) {
                str[j] = str[j - 1];
            }

            str[k + 1] = i_char;
        }
    }
}

// insertSort([..."AbcDEf"]);
var strArr = [..."AbcDEfakLamM"]; // output: ADELbcfakam
insertSort(strArr);
console.log(strArr.join(""))