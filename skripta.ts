let firstname: string = "Marko";
let fruits: string[] = ["apel","orenđ","bananananana"];
let mix: any[] = ["apel",1,"orenđ",2,"bananananana",3];

for(var index in fruits){
    console.log(fruits[index]);
}

for(var i = 0;i < fruits.length; i++){
    console.log(fruits[i])
}

function sum(a: number, b: number){
    return a + b;
}

var total = sum(10,20);
let suma = (x: number, y: number) => {
    return x + y;
}
