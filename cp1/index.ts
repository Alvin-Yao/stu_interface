/**
 * Created by Alvin on 2017/2/19.
 */

import {FunImpl} from "./impl/FunImpl";
import {AttributeImpl} from "./impl/FunImpl";
import {AttributeInterface} from "./FunInterface";

(new FunImpl()).fun("Alvin");
let Alvin = (new AttributeImpl()).fun({name:"Alvin", age: 28});
console.log(`name is ${Alvin.name} age is ${Alvin.age}`);

//类型断言可绕开检查额外属性
let Tarmmy = (new AttributeImpl().fun({nm: "Tarmmy", age: 18} as AttributeInterface));