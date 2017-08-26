;
(function (window) {

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

        var doms;
        if (id) {
            doms = scope.getElementById(id);
            if (className && tagName) {
                return doms.className == className && doms.tagName.toLowerCase() == tagName.toLowerCase() ? doms : null;
            } else if (className) {
                return doms.className == className ? doms : null;
            } else if (tagName) {
                return doms.tagName.toLowerCase() == tagName.toLowerCase() ? doms : null;
            } else {
                return doms;
            }
        }
        else if (className) {
            doms = scope.getElementsByClassName(className);
            if (tagName) {
                return doms.tagName.toLowerCase() == tagName.toLowerCase() ? doms : null;
            } else {
                return doms;
            }
        } else if (tagName) {
            doms = scope.getElementsByName(tagName);
            return doms;
        } else {
            return null;
        }
    }

    window.querySelectorABC = querySelectorABC;
})(window);