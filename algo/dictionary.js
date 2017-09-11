function Dictionary(cap) {
    var buckets = new Array(cap)
    var entries = new Array(cap)
    var count = 0;

    this.add = function (k, v) {
        var idx = k % buckets.length;
        var next = buckets[idx]
        buckets[idx] = count;
        var item = {
            key: k,
            value: v,
            next: next
        }
        entries[buckets[idx]] = item;
        count++;
    }

    this.get = function (k) {
        var idx = k % buckets.length;
        var entryIdx = buckets[idx];
        while (entries[entryIdx] && entries[entryIdx].key != k) {
            entryIdx = entries[entryIdx].next;
        }
        if (entries[entryIdx] && entries[entryIdx].key == k) {
            return entries[entryIdx].value;
        }
        return undefined;
    }

    this.remove = function (k) {
        var idx = k % buckets.length;
        var entryIdx = buckets[idx];
        var prevEntryIdx;
        while (entries[entryIdx] && entries[entryIdx].key != k) {
            prevEntryIdx = entryIdx;
            entryIdx = entries[entryIdx].next;
        }

        if (entries[prevEntryIdx]) {
            entries[prevEntryIdx].next = entries[entryIdx].next;
        } else {
            buckets[idx] = entries[entryIdx].next;
        }
        delete entries[entryIdx];
    }

    // this.growTo = function (times) {
    //     var len = buckets.length;
    //     entries = entries.concat(new Array(len * (times - 1 ) + 1))
    //     var newBuckets = new Array(entries.length);
    //     buckets.forEach(function (entryIdx) {
    //         var entryItem = entries[entryIdx]
    //         if (entryItem && entryItem.key) {
    //             newBuckets[entryItem.key % newBuckets.length] = entryItem.key;
    //         }
    //     })
    //     buckets = newBuckets;
    // }
}

var dict = new Dictionary(11);
dict.add(1, 'A');

dict.add(4, 'D');

dict.add(15, 'DD');

console.log(dict.get(1))
console.log(dict.get(4))
console.log(dict.get(15))

dict.remove(4)
console.log(dict.get(4))
console.log(dict.get(15))