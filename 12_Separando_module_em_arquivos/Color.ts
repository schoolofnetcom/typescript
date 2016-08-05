module ColorModule{
    export class Color{
        name:string;
        code:string;
        getColor():string{
            return this.code;
        }
    }
}