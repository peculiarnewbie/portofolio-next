import React, { useState, useEffect } from 'react';
import parseNotionObject from '../pages/api/parseNotionObject'
import YoutubeIframe from './YoutubeIframe'

interface Params{
    project:any
}

function ProjectDetail(info:Params){

    const {title, description, link, image_url, type, videoID, images} = parseNotionObject(info.project);

    let childCount = images.length

    var imageLinks:string[] = [];

    for(var i=0; i < childCount; i++){
        imageLinks.push(images[i].external?.url)
    }

    return(
        <div className="w-full shrink-0 lg:w-full">
            {/* <p className='text-3xl font-semibold mb-4'>Project Details</p> */}
            
            
            <div className="w-full h-full group">
                <div className="flex flex-col lg:flex-row relative w-full h-full aspect-[8/3] lg:aspect-[8/3] overflow-hidden bg-orange-300">
                    
                    <div className='flex flex-col justify-between relative w-full h-fit lg:h-full lg:w-1/2 overflow-hidden'>
                        <div className='flex w-full aspect-video bg-yellow-700 overflow-hidden'>
                            {/* <YoutubeIframe videoID={videoID}/> */}
                            
                                {imageLinks.map(function(image, i){
                                    return <div className='basis-full h-full'>
                                                <img className='object-cover h-full w-full' src={image}></img>
                                            </div>
                                })}
                            {/* <img src={image_url} className="absolute object-cover h-full w-full "/> */}
                        </div>
                        <div className=' h-2 w-full'>
                            abc
                        </div>
                        <div className=' h-16 sm:h-24 lg:h-1/5 w-full bg-slate-500'>
                            <div>
                                
                            </div>
                        </div>
                            
                    </div>
                    <div className='p-4 h-auto'>
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