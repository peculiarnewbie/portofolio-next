import { isReadable } from "stream";


function CalculateOrder(position:number) {
    let order = 2;
    if(position > 5) order = 4
    else if(position < 3)order = 0;

    return order;
}

function CalculateBasis(position:number){
    let basis = 3;
    if(position < 3){
        basis = 2;
    }
    else if(position > 5) basis = 1;

    return basis;
}

export {
    CalculateOrder,
    CalculateBasis
}