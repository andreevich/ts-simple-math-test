"use strict";
var mathItem_1 = require('./mathItem');
var UI = (function () {
    function UI(objParam) {
        this.randomOperation = ['+', '-', '*'];
        this.html = '';
        this.itemsCount = objParam.itemsCount;
        this.rangeInputValue = objParam.rangeInputValue;
        this.maxCountElementExpression = objParam.maxCountElementExpression;
        this.selector = objParam.selector;
    }
    UI.prototype.listener = function (el) {
        var classList = el.target.classList;
        var attempt = [].indexOf.apply(classList, ['right']) > -1;
        console.log(attempt);
        if (attempt) {
            classList.add('attempt-true');
        }
        else {
            classList.add('attempt-false');
        }
    };
    UI.prototype.handler = function () {
        var answers = document.querySelectorAll('.answer');
        for (var i = 0; i < answers.length; i++) {
            answers[i].addEventListener('click', this.listener, false);
        }
    };
    UI.prototype.createElements = function () {
        for (var i = 0; i < this.itemsCount; i++) {
            var elements = [];
            for (var i_1 = 0; i_1 < Math.floor(Math.random() * (this.maxCountElementExpression - 2)) + 2; i_1++) {
                elements.push(Math.floor(Math.random() * (this.rangeInputValue[1] - this.rangeInputValue[0])) + this.rangeInputValue[0]);
            }
            var operation = this.randomOperation[Math.floor(Math.random() * this.randomOperation.length)];
            var item = new mathItem_1.default(elements, operation);
            var obj = item.get();
            var answers = '';
            obj.mixResult.map(function (el, index) {
                var _class = (index == obj.index) ? 'answer right' : 'answer';
                answers += "<span class='" + _class + "'>" + el + "</span>";
                return answers;
            });
            this.html += "<div class=\"item-expresion\">\n                    <div>Expression: " + obj.expression + " =</div>\n                    <div>" + answers + "</div>\n                </div>\n                ";
        }
        document.querySelector(this.selector).innerHTML = this.html;
        this.handler();
    };
    return UI;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UI;
