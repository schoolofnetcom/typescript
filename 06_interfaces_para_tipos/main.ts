interface IPeople{
    name:string;
    age:number;
}

function people (value:IPeople):void{
    console.log(value);
}

people({name:"Guilherme",age:19});

function people2(name:string,age:number):IPeople{
    return {name: name,age:age};
}
console.log(people2("Pedro",25));

interface IColor{
    title?:string;
    codeColor:string;
}

function getColor(codeColor:string,title?:string):IColor{
    if(title){
        return {title:title,codeColor:codeColor};
    }
    return {codeColor:codeColor};
}

console.log(getColor("#0000"));
console.log(getColor("#0000","black"));