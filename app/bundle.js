/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ui_1 = __webpack_require__(1);
	var uiParams = {
	    itemsCount: 5,
	    rangeInputValue: [-100, 100],
	    maxCountElementExpression: 4,
	    selector: '#test'
	};
	var ui = new ui_1.default(uiParams);
	ui.createElements();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mathItem_1 = __webpack_require__(2);
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


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);