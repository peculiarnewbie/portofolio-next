import React, { useState, useEffect } from 'react';
import parseNotionObject from '../pages/api/parseNotionObject'

interface Params{
    project:any
}

function ProjectDetail(info:Params){

    const {title, description, link, image_url, type} = parseNotionObject(info.project);

    return(
        <div className="basis-1/6 lg:w-full">
            {/* <p className='text-3xl font-semibold mb-4'>Project Details</p> */}
            
            
            <div className="h-full group">
                <div className="flex flex-col lg:flex-row relative w-full h-full aspect-auto lg:aspect-[8/3] overflow-hidden bg-orange-300">
                    
                    <div className='relative w-full aspect-video lg:h-full lg:w-1/2 bg-sky-700 overflow-hidden'>
                        <div className='relative w-full aspect-video bg-yellow-700 overflow-hidden'>
                            <img src={image_url} className="absolute object-cover h-full w-full "/>
                        </div>
                        <div className='absolute bottom-0 h-1/5 w-full bg-slate-500'>
                            
                        </div>
                            
                    </div>
                    <div className='p-4'>
                        <div className="text-4xl font-semibold text-black">{title}</div>
                        <div className=" h-fit w-fit 
                        transition-all ease-out shadow-sm bg-white">
                            <div className="truncate">{type}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            

        </div>
    )
}


export default ProjectDetail;