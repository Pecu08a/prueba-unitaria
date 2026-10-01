import { suma } from '../app/suma.js';
import { resta } from '../app/resta.js';
import { division } from '../app/division.js';
export function calculadora(a , b , operacion){
    if(operacion === 'suma'){
        return suma(a,b);
    }else if(operacion === 'resta'){
        return resta(a,b);
    }else if(operacion === 'division'){
        return division(a,b);
    }else{
        return 'Operacion no valida';
    }
}