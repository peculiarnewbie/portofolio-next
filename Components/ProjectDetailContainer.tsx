import { type } from 'os';
import React, { useState, useEffect } from 'react';
import ProjectDetail from './ProjectDetail';
import {CalculateOrder} from './funtions/Calculations'

interface Params{
    active:number
    order:number
    status:boolean
    statusFunction:StatusFunction
    changeDetail:any
    data:any
}

type StatusFunction = {
    (status:boolean) : void
}

function ProjectDetailContainer(info:Params){
    const HandleClose = () => {
        info.statusFunction(false)
    }

    function ChangeDetail(next:boolean, position:number){
        let newPosition:number

        if(next) newPosition = position+1 ;
        else newPosition = position-1;

        let order = CalculateOrder(newPosition)

        info.changeDetail(newPosition, order)
    }

    let height = '[500px]'

    const data = info.data[info.active-1]

    let order = 1
    if(info.active > 5) order = 5
    else if(info.active > 2) order = 3

    if(!info.status) height = '0' ;

    

    return(
        <div style={{display:info.status? 'flex' : 'none'}} 
        className={`relative h-fit w-full basis-full grow order-${order} transition-all`}>
            <div id='projectDetail' className='absolute -top-[200px]'></div>
            <ProjectDetail project={data} closeFunction={HandleClose} changeDetail={ChangeDetail}/>
        </div>
    )
}


export default ProjectDetailContainer;