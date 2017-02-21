/**
 * Created by Alvin on 2017/2/19.
 */
import {FunInterface} from "../FunInterface";
import {AttributeInterface} from "../FunInterface";
import {IndexableInterace} from "../FunInterface";
import {StringIndexArrayInterface} from "../FunInterface";

export class FunImpl {
    fun: FunInterface = (info: string) => {
        console.log("test for function interface , your input is " + info);
    };
}

export class AttributeImpl {
    fun = (persion: AttributeInterface): {name: string, age: number} => {
        console.log(`your name is ${persion.name} and age is ${persion.age}`);
        let attr = {age: 18, name: "Alvin"};
        if (persion.name) {
            attr.name = persion.name;
        }
        if (persion.age) {
            attr.age = persion.age;
        }
        return attr;
    };
}


export class IndexableImpl {
    fun = (arr: IndexableInterace): string => {
        return arr[0];
    };

    stringIndexFun = (arr: StringIndexArrayInterface, proName: string): string => {
        return arr[proName];
    };
}