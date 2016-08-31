"use strict";
var Item = (function () {
    function Item(argumentsExpression, operations) {
        this.fakeResult = [];
        this.operations = operations;
        this.argumentsExpression = argumentsExpression;
    }
    Item.prototype.getExpresion = function () {
        return this.argumentsExpression.join(" " + this.operations + " ");
    };
    Item.prototype.getResult = function () {
        this.result = eval(this.getExpresion());
    };
    Item.prototype.getFakeResult = function (count) {
        if (count === void 0) { count = 3; }
        var max = 500;
        var min = -500;
        for (var i = 0; i < count; i++) {
            this.fakeResult.push(Math.floor(Math.random() * (max - min)) + min);
        }
    };
    Item.prototype.mix = function () {
        this.getResult();
        this.getFakeResult();
        this.fakeResult.push(this.result);
        this.fakeResult.sort();
    };
    Item.prototype.getRightIndex = function () {
        var _this = this;
        var index;
        this.fakeResult.map(function (el, i) {
            if (el == _this.result) {
                index = i;
            }
        });
        return index;
    };
    Item.prototype.get = function () {
        this.mix();
        return {
            result: this.result,
            mixResult: this.fakeResult,
            index: this.getRightIndex(),
            expression: this.getExpresion()
        };
    };
    return Item;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Item;
