import { type } from 'os';
import React, { useState, useEffect } from 'react';
import ProjectDetail from './ProjectDetail';

interface Params{
    active:number
    order:number
    status:boolean
    statusFunction:StatusFunction
    data:any
}

type StatusFunction = {
    (status:boolean) : void
}

function ProjectDetailContainer(info:Params){

    const handleClose = () => {
        info.statusFunction(false)
    }

    let height = '[720px]'

    if(!info.status) height = '0' ;

    return(
        <div style={{display:info.status? 'flex' : 'none'}} 
        className={`relative h-${height} w-full basis-full grow order-1 bg-slate-400 transition-all`}>
            <ProjectDetail project={info.data[0]} closeFunction={handleClose}/>
        </div>
    )
}


export default ProjectDetailContainer;