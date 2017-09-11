//var url = “http://witmax.cn/index.php?key0=0&key1=1&key2=2″

function queryStringv1(url) {
    var ret = {}
    if ((url.indexOf('?')) > -1) {
        var search = url.substr(url.indexOf('?') + 1);
        if (search) {
            var arr = search.split('&');
            for (var i = 0; i < arr.length; i++) {
                ret[arr[i].split('=')[0]] = arr[i].split('=')[1]
            }
        }
    }
    return ret;
}

function queryStringV2(url) {
    var ret = {}
    var reg = /([^?=&]+)=([^?=&]+)/gi;
    url.replace(reg, function (rs, $1, $2) {
        ret[$1] = $2;
        console.log($1,  $2)
    })
    return ret;
}

var url = "http://witmax.cn/index.php?key0=0&key1=1&key2=2"
var ret = queryStringV2(url);
console.log(ret)