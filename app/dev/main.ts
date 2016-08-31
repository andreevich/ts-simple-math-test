"use strict";

import UI from './ui';
import Params from './interface';

let uiParams:Params = {
    itemsCount: 5,
    rangeInputValue: [-100, 100],
    maxCountElementExpression: 4,
    selector: '#test'
};

let ui = new UI(uiParams);
ui.createElements();