//Decorardor
function printToConsole(constructor:Function){
    console.log(constructor);
}


const printToConsoleConditional = ():Function=>{
    return () => console.log('Hola');
}

//Llamar decorador
@printToConsoleConditional()
export class pokemon {

    public publicApi:string = 'https://pokeapi.com'
    constructor(
        public name:string
    ){}
}



