import { type } from 'os';
import React, { useState, useEffect } from 'react';
import ProjectDetail from './ProjectDetail';
import {CalculateOrder} from './functions/Calculations'


interface Params{
    active:number
    order:number
    status:boolean
    statusFunction:StatusFunction
    changeDetail:any
    data:[any]
    children:any
    isMobileSize:boolean
}

type StatusFunction = {
    (status:boolean) : void
}

interface Translation {
    [key:number]: number;
}

function ProjectDetailContainer(info:Params){

    let childCount = info.data.length

    const HandleClose = () => {
        info.statusFunction(false)
    }

    function ChangeDetail(next:boolean, position:number){
        let newPosition:number

        if(next) newPosition = position+1 ;
        else newPosition = position-1;

        let newOrder = CalculateOrder(newPosition)

        info.changeDetail(newPosition, newOrder)
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

    let translateDir ='X'

    if(info.isMobileSize) translateDir = 'X'
    else translateDir = 'Y'

    console.log(info.isMobileSize)


    return(
        // <div style={{display:info.status? 'flex' : 'none', height:`${height}`, order: `${order}`,}}
        <div style={{order: `${info.order}`, aspectRatio:info.status? '14/5' : '100000/1', opacity:info.status? '1' : '0',
                    marginTop:info.status? '1rem' : '0', marginBottom:info.status? '1rem' : '0',
                    transitionProperty: `all`,
                    transitionTimingFunction: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`,
                    transitionDuration: `500ms`
                    // padding:info.status? '1rem' : '0px'
            }}
            className='relative rounded-lg w-full h-[600px] sm:h-[800px] md:h-[1000px] lg:h-auto px-4 pb-8 lg:p-0 lg:mx-4'>
            {/* <div className='text-xl font-semibold mb-2'>Project Details</div> */}
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
                    className='flex flex-col relative rounded-lg w-full h-[700px]  lg:h-full overflow-hidden'
                >
                    <div className='absolute h-full w-full z-10 shadow-inner-xl pointer-events-none'></div>
                    <div style={{transform: `translate${translateDir}(-${info.active-1}00%)`,
                                transitionProperty: `transform`,
                                transitionTimingFunction: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`,
                                transitionDuration: `500ms`,}} className='flex lg:flex-col h-full w-full flex-nowrap'>
                        {info.children}
                    </div>
                </div>
                <a onClick={HandleClose}>
                    <div style={{cursor:info.status? 'pointer' : 'default' , pointerEvents:info.status? 'auto' : 'none',}} 
                        className="hidden lg:block text-2xl font-semibold absolute right-2 top-4 h-10 w-10 cursor-pointer">x</div>
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