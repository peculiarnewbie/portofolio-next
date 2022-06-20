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

function CalculateColor(type:string){
    let color
    if(type == 'Game') color = '#23CE6B'
    else if(type == "Animation") color = '#FBD87F'
    else if(type == 'Virtual Reality') color = '#64B6AC'
    else if(type == 'Website') color = '#A55E51'
    else if(type == "Unity Package") color = '#AC92A6'
    
    return color;
}

export {
    CalculateOrder,
    CalculateBasis,
    CalculateColor
}