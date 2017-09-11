// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18

Date.prototype.Format = function (fmt) {
    var o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'S': this.getMilliseconds()
    }

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
                ('00' + o[k]).substr(("" + o[k]).length));
        }
    }
    return fmt;
}

Date.prototype.FormatV2 = function (fmt) {

    var reg = /(y+)?(M+)?(d+)?/g;
    var self = this;
    var ret = fmt.replace(reg, function (rs, $1, $2, $3) {
        if ($1) {
            return (self.getFullYear() + "").substr(4 - $1.length);
        }
        if ($2) {
            var mons = self.getMonth() + 1 + "";
            return $2.length == 1 ? mons : ('00' + mons).substr(mons.length)
        }
        if ($3) {
            var days = self.getDate() + "";
            return $3.length == 1 ? days : ('00' + days).substr(days.length)
        }
        return "";
    })
    return ret;
}

console.log(new Date().Format('yyyy-MM-dd hh:mm:ss.S'))
console.log(new Date().Format('MM/dd/yyyy h:m:s.S'))

console.log(new Date().FormatV2('yyyy-MM-dd'))
console.log(new Date().FormatV2('MM/dd/yyyy'))


