/**
 * Created by Alvin on 2017/2/19.
 */
import {FunInterface} from "../FunInterface";

export class FunImpl {
    fun: FunInterface = (info: string) => {
        console.log("test for function interface , your input is " + info);
    };
}