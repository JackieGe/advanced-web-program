function cloneObject(obj, ret) {
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            if (p && typeof p == 'object') {
                ret[p] = {}
                cloneObject(obj[p], ret[p])
            } else {
                ret[p] = obj[p];
            }
        }
    }
}

var obj = {
    name: 'JackieGe',
    data: {
        title: 'dev',
        salary: {
            gross: '22k',
            net: '14k'
        }
    }
}

var ret = {};

cloneObject(obj, ret)
console.log(ret)

function Animal() {
    this.say = function () {

    }
}

var animal = new Animal()
for (var p in animal) {
    console.log(p)
    console.log(animal[p])
}