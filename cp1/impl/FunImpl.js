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
//# sourceMappingURL=FunImpl.js.map