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
    data:[any]
    children:any
}

type StatusFunction = {
    (status:boolean) : void
}

interface Translation {
    [key:number]: number;
}

function ProjectDetailContainer(info:Params){
    const HandleClose = () => {
        info.statusFunction(false)
    }

    function ChangeDetail(next:boolean, position:number){
        let newPosition:number

        if(next) newPosition = position+1 ;
        else newPosition = position-1;

        console.log(`before ${position}, after ${newPosition}`)

        let order = CalculateOrder(newPosition)

        info.changeDetail(newPosition, order)
    }

    let position = info.data[info.active-1]?.properties.Position?.number

    function ChangeDetailPrev(){
        if(position == 1) ChangeDetail(true, childCount-1)
        else ChangeDetail(false, position)
    }

    function ChangeDetailNext(){
        if(position == childCount) ChangeDetail(false, 2)
        else ChangeDetail(true, position)
    }

    let height = '[500px]'

    let order = 1
    if(info.active > 5) order = 5
    else if(info.active > 2) order = 3

    if(!info.status) height = '0' ;

    var translation = new Array();

    let childCount = info.data.length

    for(var i=0; i < childCount; i++){
        translation[i] = i/childCount*100
    }

    return(
        // <div style={{display:info.status? 'flex' : 'none', height:`${height}`, order: `${order}`,}}
        <div style={{order: `${order}`, aspectRatio:info.status? '8/3' : '100000/1', opacity:info.status? '1' : '0',
                    marginTop:info.status? '1rem' : '0', marginBottom:info.status? '1rem' : '0',
                    transitionProperty: `all`,
                    transitionTimingFunction: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`,
                    transitionDuration: `300ms`
                    // padding:info.status? '1rem' : '0px'
            }}
            className={`relative rounded-lg w-full h-[700px] lg:aspect-[8/3] lg:h-auto mx-4 bg-red-300`}>
            {/* <div>Project Details</div> */}
            <div className='flex items-center absolute inset-y-0 -left-14'>
                <div style={{cursor:info.status? 'pointer' : 'default' , pointerEvents:info.status? 'auto' : 'none'}} className='h-10 w-10' onClick={ChangeDetailPrev}>
                    <img src='/img/arrow-left.svg' className='drop-shadow'/>
                </div>
            </div>

            <div style={{}} className="relative w-full h-full transition-all">
                <div style={{height:info.status? '100%' : '0px',
                    transitionProperty: `all`,
                    transitionTimingFunction: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`,
                    transitionDuration: `300ms`}}
                    className='flex flex-col relative rounded-lg w-full h-[700px]  lg:h-full bg-red-300 overflow-hidden'
                >
                    <div className='absolute h-full w-full z-10 shadow-inner-xl pointer-events-none'></div>
                    <div style={{transform: `translateY(-${translation[info.active-1]}%)`,
                                transitionProperty: `transform`,
                                transitionTimingFunction: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`,
                                transitionDuration: `500ms`}}>
                        {info.children}
                    </div>

                    {/* <ProjectDetail project={data} closeFunction={HandleClose} changeDetail={ChangeDetail}/> */}
                </div>
                {/* <div className='absolute h-1 w-1 bg-black'>
                    {translation.map(function(range, i){
                        return <div className={`-translate-y-[${range}%]`}></div>
                    })}
                </div> */}
                <a onClick={HandleClose}>
                    <div style={{cursor:info.status? 'pointer' : 'default' , pointerEvents:info.status? 'auto' : 'none'}} className="text-4xl font-semibold absolute right-6 top-6 h-10 w-10 cursor-pointer">x</div>
                </a>

            </div>
            <div className='flex items-center absolute inset-y-0 -right-14'>
                <button style={{cursor:info.status? 'pointer' : 'default' , pointerEvents:info.status? 'auto' : 'none'}} className='h-10 w-10' onClick={ChangeDetailNext}>
                    <img src='/img/arrow-right.svg' className='drop-shadow'/>
                </button>
            </div>
        </div>
    )
}


export default ProjectDetailContainer;