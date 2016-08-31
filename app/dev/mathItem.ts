"use strict";
interface itemExpession {
    result:number,
    mixResult:number[],
    index:number,
    expression:string
}

class Item {
    public argumentsExpression:number[];
    public fakeResult:number[] = [];
    public operations:string;
    public result:number;

    constructor(argumentsExpression:number[], operations:string) {
        this.operations = operations;
        this.argumentsExpression = argumentsExpression;
    }

    getExpresion():string {
        return this.argumentsExpression.join(` ${this.operations} `);
    }

    getResult():void {
        this.result = eval(this.getExpresion());
    }

    getFakeResult(count:number = 3):void {
        let max = 500;
        let min = -500;
        for (let i = 0; i < count; i++) {
            this.fakeResult.push(Math.floor(Math.random() * (max - min)) + min)
        }
    }

    mix():void {
        this.getResult();
        this.getFakeResult();
        this.fakeResult.push(this.result);
        this.fakeResult.sort();
    }

    getRightIndex():number {
        let index:number;
        this.fakeResult.map((el, i)=> {
            if (el == this.result) {
                index = i;
            }
        });
        return index;
    }

    get():itemExpession {
        this.mix();
        return {
            result: this.result,
            mixResult: this.fakeResult,
            index: this.getRightIndex(),
            expression:this.getExpresion()
        }
    }
}
export default Item;
