;
(function (window) {

    // the pattern cannot be /#(\w+)?\.(\w+)?(\w+)?/img
    var pattern = /(#(\w+))?(\.(\w+))?(\w+)?/img;

    HTMLDocument.prototype.querySelectorABC = function (selector) {
        "use strict";
        var ret = querySelectorABC(this, selector);
        return ret;
    }
    HTMLElement.prototype.querySelectorABC = function (selector) {
        var ret = querySelectorABC(this, selector);
        return ret;
    }

    function querySelectorABC(scope, selector) {
        var id, className, tagName;
        // use the replace callback to get the id/className/tagName
        selector.replace(pattern, function () {
            if (arguments[2]) {
                id = arguments[2];
            }
            if (arguments[4]) {
                className = arguments[4];
            }
            if (arguments[5]) {
                tagName = arguments[5];
            }
        })

        if (id) {
            var dom = scope.getElementById(id);
            if (className && tagName) {
                return dom.className == className && dom.tagName.toLowerCase() == tagName.toLowerCase() ? dom : null;
            } else if (className) {
                return dom.className == className ? dom : null;
            } else if (tagName) {
                return dom.tagName.toLowerCase() == tagName.toLowerCase() ? dom : null;
            } else {
                return dom;
            }
        }
        else if (className) {
            var doms = scope.getElementsByClassName(className);
            if (tagName) {
                doms = Array.prototype.slice.call(doms).filter( function(ele, index) {
                    return ele.tagName.toLowerCase() == tagName.toLowerCase()
                })
                return doms;
            } else {
                return doms;
            }
        } else if (tagName) {
            dom = scope.getElementsByTagName(tagName);
            return dom;
        } else {
            return null;
        }
    }

    window.querySelectorABC = querySelectorABC;
})(window);