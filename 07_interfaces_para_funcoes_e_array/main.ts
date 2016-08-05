interface ITypeFunc{
    (a:number,b:number):boolean;
}

var add: ITypeFunc;
add = function (varA:number,varB:number):boolean {
    return true;
};

interface IColor{
    (codeColor:string,title?:string):{codeColor:string,title?:string};
}

var getColor: IColor;
getColor = function(codeColor:string,title?:string):{codeColor:string,title?:string}{
    if(title){
        return {codeColor:codeColor,title:title};
    }
    return {codeColor:codeColor}
};

interface IArrayTypes{
    [index:number]:string;
}
var a:IArrayTypes;
a = ["test",34];
console.log(a);