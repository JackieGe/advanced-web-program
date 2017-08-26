//
// var str=".myclass div";
//
// var results = /(#)?(\.)?(\w+)?/.exec(str);
// console.log(results)
// for(var rs in results) {
//     console.log(results[rs]);
// }


// var str=".myClass div ";
//
// var results = /#(\w+)?(\w+)?/.exec(str);
// var reg = /#(\w+)?(\w+)?/;
// var results = reg.match(str)
// console.log(results)
// for(var rs in results) {
//     console.log(results[rs]);
// }


// var reg = /^(#)?(\.)?(\w+)$/img;
// var results = reg.exec('#divMain');
// console.log(results);
//
// var reg = /^(#)?(\.)?(\w+)$/img;
// console.log(reg.exec('.myclass'));

var pn= "13401133264";
var reg = /^(\d{3})(\d{4})(\d{4})$/;
console.log(pn.replace(reg, function (rs, $1, $2, $3) {
    return $1 + ' ' + $2 + ' ' + $3;
}))

var query = 'name=jackie&title' +
    '=Developer';
var reg2 = /([^&=]+)=([^&=]*)/g;
// var result2 = reg2.exec(query);
// console.log(result2)
var obj = {}
var newQuery = query.replace(reg2, function (rs, $1, $2) {
    obj[$1] = $2;
})

console.log(obj);
console.log(newQuery);