/**
 * Created by Alvin on 2017/2/19.
 */

import {FunImpl} from "./impl/FunImpl";
import {AttributeImpl} from "./impl/FunImpl";
import {IndexableImpl} from "./impl/FunImpl";
import {AttributeInterface} from "./FunInterface";

(new FunImpl()).fun("Alvin");
let Alvin = (new AttributeImpl()).fun({name:"Alvin", age: 28});
console.log(`name is ${Alvin.name} age is ${Alvin.age}`);

//类型断言可绕开检查额外属性
let Tarmmy = (new AttributeImpl().fun({nm: "Tarmmy", age: 18} as AttributeInterface));

//接口对数组参数的约束
let arr = ["aaa","b"];
// let obj = ["a","b", 18]; error
console.log((new IndexableImpl().fun(arr)));
//字符串索引
let obj = {
    name: 'a',
    key : 'k'
};
console.log((new IndexableImpl().stringIndexFun(obj, 'key')));