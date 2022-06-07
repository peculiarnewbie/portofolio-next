import React, { useState, useEffect } from 'react';

interface Params{
    project:any
}

function ProjectDetail(info:Params){

    let title = info.project?.properties.Name.title[0]?.plain_text
    let description = info.project?.properties.Description.rich_text[0]?.plain_text
    let link = info.project?.properties.Link.url
    let image_url = info.project?.properties.Images.files[0]?.file?.url
    let type = info.project?.properties.Type.select?.name
    let position = info.project?.properties.Position?.number

    return(
        <div className="">
            {/* <p className='text-3xl font-semibold mb-4'>Project Details</p> */}
            
            
            <div className="h-full group">
                <div className="flex flex-col lg:flex-row relative w-full h-full aspect-auto lg:aspect-[8/3] overflow-hidden bg-orange-300">
                    
                    <div className='relative w-full h-60 lg:h-full lg:w-1/2 bg-sky-700 overflow-hidden'>
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