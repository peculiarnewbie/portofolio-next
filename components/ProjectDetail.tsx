import React, { useState, useEffect } from 'react';
import parseNotionObject from '../pages/api/parseNotionObject'
import YoutubeIframe from './YoutubeIframe'

interface Params{
    project:any
}

function ProjectDetail(info:Params){
    const [mediaIndex, setMediaIndex] = useState(0);

    const {title, description, link, image_url, type, videoID, videoThumb, images, roles} = parseNotionObject(info.project);

    let haveVideo = true;
    if(typeof videoID == "undefined") haveVideo = false

    const ChangeMedia = (index:number) => (e: any) => {
        if(haveVideo)index++
        setMediaIndex(index)
    }

    let childCount = images.length

    var translation = new Array();

    for(var i=0; i < childCount; i++){
        translation[i] = i*100
    }

    var imageLinks:string[] = [];

    for(var i=0; i < childCount; i++){
        imageLinks.push(images[i].external?.url)
    }

    let roleText =''

    roles.forEach(listRoles);

    function listRoles(item:any, index:number){
        if(index == 0) roleText += item.name
        else roleText += ', ' + item.name
    }

    return(
        <div className="w-full shrink-0 lg:w-full">
            {/* <p className='text-3xl font-semibold mb-4'>Project Details</p> */}
            
            
            <div className="w-full h-full group">
                <div className="flex flex-col lg:flex-row relative w-full h-full aspect-[14/5] overflow-hidden bg-slate-100 dark:bg-zinc-800 transition-all">
                    
                    <div className='flex flex-col justify-between relative w-full h-fit lg:h-full lg:w-1/2 overflow-hidden'>
                        
                        <div className='flex w-full aspect-video bg-yellow-700 overflow-hidden'>
                            
                            <div style={{transform: `translateX(-${mediaIndex}00%)`,
                                    transitionProperty: `transform`,
                                    transitionTimingFunction: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`,
                                    transitionDuration: `500ms`,}} className='flex h-full w-full flex-nowrap'>
                                {haveVideo && (
                                    <YoutubeIframe haveVideo={haveVideo} videoID={videoID}/>
                                )}
                                {imageLinks.map(function(image, i){
                                    return <div className='w-full shrink-0 h-full'>
                                                <img className='object-cover h-full w-full' src={image}></img>
                                            </div>
                                })}
                            </div>
                            
                                
                            {/* <img src={image_url} className="absolute object-cover h-full w-full "/> */}
                        </div>
                        <div className=' h-1 w-full'></div>
                        <div className='relative h-16 sm:h-24 lg:h-1/5 w-full'>
                            <div className='flex absolute -top-5 h-[125%] w-full scroll'>
                                <div className='flex h-[80%] absolute top-5 bg-slate-500 w-full'>
                                    {haveVideo && (
                                        <div onClick={ChangeMedia(-1)} className='relative shrink-0 h-full aspect-video brightness-75'>
                                            
                                            <img src='/img/Youtube.svg' className='absolute drop-shadow h-1/2 top-1/4 left-[30%]'/>
                                            
                                            <img className='object-cover h-full w-full' src={videoThumb}></img>
                                        </div>
                                    )}
                                    {imageLinks.map(function(image, i){
                                        return <div onClick={ChangeMedia(i)} className='shrink-0 h-full aspect-video brightness-75'>
                                                    <img className='object-cover h-full w-full' src={image}/>
                                                </div>
                                    })}
                                    <div style={{transform: `translateX(${mediaIndex}00%)`}}
                                            className='absolute shrink-0 h-full top-0 aspect-video border-2 border-slate-200 backdrop-brightness-150 '>
                                        <img className='absolute  left-[40%] -top-[21%] h-1/5 z-100' src='/img/Uptick.svg'></img>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='flex items-center absolute inset-y-0 bg-[#ffffff80] w-6 p-1 '>
                                <div className='flex items-center h-10 w-6 '>
                                    <img src='/img/arrow-left.svg' className='drop-shadow'/>
                                </div>
                            </div>
                            <div className='flex items-center absolute inset-y-0 right-0 bg-[#ffffff80] w-6 p-1'>
                                <div className='flex items-center h-10 w-6'>
                                    <img src='/img/arrow-right.svg' className='drop-shadow'/>
                                </div>
                            </div> */}
                        </div>
                            
                    </div>
                    <div className='relative w-full lg:w-1/2 p-4 h-auto grow '>
                        <div className="text-2xl md:text-3xl font-semibold text-black dark:text-gray-100">{title}</div>
                        <div className=" h-fit w-fit text-sm text-gray-700 dark:text-gray-300">
                            <div className="truncate pt-1">Type: {type}</div>
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-100 pt-1">Roles: {roleText}</div>

                        <div className="w-full h-1/2 mt-4 text-sm text-gray-700 dark:text-gray-300 ">
                            <div className="pt-1">{description}</div>
                        </div>

                        {/* <div className="text-2xl md:text-3xl font-semibold text-black dark:text-gray-100">{roles[0]}</div> */}
                        <a href={link} target="_blank">
                            <div className='flex items-center p-2 md:p-4 bg-slate-400 dark:bg-gray-500 w-24 h-12 md:w-28 md:h-14 rounded-lg shadow-lg absolute bottom-7 right-8 md:right-10 hover:scale-105 transition-transform'>
                                <div className='font-bold text-lg md:text-xl text-center text-white'>{'More →'}</div>
                            </div>
                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;