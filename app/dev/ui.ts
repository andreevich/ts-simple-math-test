"use strict";
import Params from './interface';
import Item from './mathItem';

class UI {
    itemsCount:number;
    rangeInputValue:number[];
    maxCountElementExpression:number;
    selector:string;
    randomOperation:string[] = ['+', '-', '*'];
    html:string = '';


    constructor(objParam:Params) {
        this.itemsCount = objParam.itemsCount;
        this.rangeInputValue = objParam.rangeInputValue;
        this.maxCountElementExpression = objParam.maxCountElementExpression;
        this.selector = objParam.selector;
    }

    listener(el) {
        let classList = el.target.classList;
        let attempt = [].indexOf.apply(classList, ['right']) > -1;
        console.log(attempt)
        if (attempt) {
            classList.add('attempt-true');
        }
        else {
            classList.add('attempt-false');
        }
    }

    handler() {
        let answers = document.querySelectorAll('.answer');
        for (let i = 0; i < answers.length; i++) {
            answers[i].addEventListener('click', this.listener, false);
        }
    }

    createElements():void {
        for (let i = 0; i < this.itemsCount; i++) {
            let elements:number[] = [];
            for (let i = 0; i < Math.floor(Math.random() * (this.maxCountElementExpression - 2)) + 2; i++) {
                elements.push(
                    Math.floor(Math.random() * (this.rangeInputValue[1] - this.rangeInputValue[0])) + this.rangeInputValue[0]
                )
            }

            let operation:string = this.randomOperation[Math.floor(Math.random() * this.randomOperation.length)];
            let item = new Item(elements, operation);
            var obj = item.get();
            var answers:string = '';

            obj.mixResult.map(function (el, index) {
                let _class:string = (index == obj.index) ? 'answer right' : 'answer';
                answers += `<span class='${_class}'>${el}</span>`;
                return answers;
            });
            this.html += `<div class="item-expresion">
                    <div>Expression: ${obj.expression} =</div>
                    <div>${answers}</div>
                </div>
                `;
        }
        document.querySelector(this.selector).innerHTML = this.html;
        this.handler();
    }
}
export default UI;
