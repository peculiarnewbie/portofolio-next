import React, { useState, useEffect } from 'react';

interface Params{
    project:any
    closeFunction:any
    changeDetail:any
}

function ProjectDetail(info:Params){

    let title = info.project?.properties.Name.title[0]?.plain_text
    let description = info.project?.properties.Description.rich_text[0]?.plain_text
    let link = info.project?.properties.Link.url
    let image_url = info.project?.properties.Images.files[0]?.file?.url
    let type = info.project?.properties.Type.select?.name
    let position = info.project?.properties.Position?.number

    function ChangeDetailNext(){
        info.changeDetail(true, position)
    }

    function ChangeDetailPrev(){
        info.changeDetail(false, position)
    }

    return(
        <div className="relative w-full h-full p-4">
            {/* <p className='text-3xl font-semibold mb-4'>Project Details</p> */}
            <div className='flex items-center absolute inset-y-0 -left-12'>
                <button className='h-10 w-10' onClick={ChangeDetailPrev}>
                    <img src='/img/arrow-left.svg' className='drop-shadow'/>
                </button>
            </div>
            
            <div className="h-full group">
                <div className="flex flex-col lg:flex-row relative rounded-lg w-full md:aspect-[8/3] shadow-inner overflow-hidden bg-orange-300">
                    <div className='relative w-full h-60 lg:h-full lg:w-1/2 bg-sky-700 overflow-hidden'>
                        <div className='relative w-full aspect-video bg-yellow-700 overflow-hidden'>
                            <img src={image_url} className="absolute object-cover h-full w-full "/>
                        </div>
                        <div className='absolute bottom-0 h-1/5 w-full bg-slate-500'>
                            
                        </div>
                            
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
            <div className='flex items-center absolute inset-y-0 -right-12'>
                <button className='h-10 w-10' onClick={ChangeDetailNext}>
                    <img src='/img/arrow-right.svg' className='drop-shadow'/>
                </button>
            </div>

        </div>
    )
}


export default ProjectDetail;