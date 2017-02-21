/**
 * Created by Alvin on 2017/2/19.
 */
export interface FunInterface {
    (info: string): void
}
/**
 * interface for attribute
 */
export interface AttributeInterface{
    name?: string,
    age: number
}

export interface IndexableInterace {
    [index: number] : string;
}

export interface StringIndexArrayInterface {
    [index: string] : string;
}