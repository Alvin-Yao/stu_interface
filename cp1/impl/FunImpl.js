"use strict";
var FunImpl = (function () {
    function FunImpl() {
        this.fun = function (info) {
            console.log("test for function interface , your input is " + info);
        };
    }
    return FunImpl;
}());
exports.FunImpl = FunImpl;
var AttributeImpl = (function () {
    function AttributeImpl() {
        this.fun = function (persion) {
            console.log("your name is " + persion.name + " and age is " + persion.age);
            var attr = { age: 18, name: "Alvin" };
            if (persion.name) {
                attr.name = persion.name;
            }
            if (persion.age) {
                attr.age = persion.age;
            }
            return attr;
        };
    }
    return AttributeImpl;
}());
exports.AttributeImpl = AttributeImpl;
var IndexableImpl = (function () {
    function IndexableImpl() {
        this.fun = function (arr) {
            return arr[0];
        };
        this.stringIndexFun = function (arr, proName) {
            return arr[proName];
        };
    }
    return IndexableImpl;
}());
exports.IndexableImpl = IndexableImpl;
//# sourceMappingURL=FunImpl.js.map