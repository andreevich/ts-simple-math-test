"use strict";
var ui_1 = require('./ui');
var uiParams = {
    itemsCount: 5,
    rangeInputValue: [-100, 100],
    maxCountElementExpression: 4,
    selector: '#test'
};
var ui = new ui_1.default(uiParams);
ui.createElements();
