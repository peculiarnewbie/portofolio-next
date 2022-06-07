import React, { useState, useEffect } from 'react';

interface Params{
    project:any
    closeFunction:any
}

function ProjectDetail(info:Params){

    let title = info.project?.properties.Name.title[0]?.plain_text
    let description = info.project?.properties.Description.rich_text[0]?.plain_text
    let link = info.project?.properties.Link.url
    let image_url = info.project?.properties.Images.files[0]?.file?.url
    let type = info.project?.properties.Type.select?.name
    let position = info.project?.properties.Position?.number

    return(
        <div className="w-full h-full p-4 bg-emerald-200">
            <div className="h-full group">
                <div className="flex flex-col lg:flex-row relative rounded-lg w-full md:aspect-[3/1] shadow-lg overflow-hidden bg-orange-300">
                <div className='relative w-full h-60 lg:h-full lg:w-1/2 bg-sky-700 overflow-hidden'>
                        <img src={image_url} className="absolute object-cover h-full"/>
                </div>
                <div className='p-4'>
                    <div className="text-4xl font-semibold text-black">{title}</div>
                        <div className="rounded h-fit w-fit 
                        transition-all ease-out shadow-sm bg-white">
                            <div className="truncate">{type}</div>
                        </div>
                        <a onClick={info.closeFunction}>
                            <div className="text-4xl font-semibold absolute right-6 top-2 cursor-pointer">x</div>
                        </a>
                    </div>
                
                </div>
            </div>

        </div>
    )
}


export default ProjectDetail;