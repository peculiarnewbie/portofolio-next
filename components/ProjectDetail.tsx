import React, { useState, useEffect } from 'react';
import parseNotionObject from '../pages/api/parseNotionObject'
import YoutubeIframe from './YoutubeIframe'

interface Params{
    project:any
}

function ProjectDetail(info:Params){
    const [mediaIndex, setMediaIndex] = useState(0);

    const {title, description, link, image_url, type, videoID, videoThumb, images} = parseNotionObject(info.project);

    let haveVideo = true;
    if(typeof videoID == "undefined") haveVideo = false

    const ChangeMedia = (index:number) => (e: any) => {
        console.log(index)
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

    return(
        <div className="w-full shrink-0 lg:w-full">
            {/* <p className='text-3xl font-semibold mb-4'>Project Details</p> */}
            
            
            <div className="w-full h-full group">
                <div className="flex flex-col lg:flex-row relative w-full h-full aspect-[14/5] overflow-hidden bg-orange-300">
                    
                    <div className='flex flex-col justify-between relative w-full h-fit lg:h-full lg:w-1/2 overflow-hidden'>
                        
                        <div className='flex w-full aspect-video bg-yellow-700 overflow-hidden'>
                            
                            <div style={{transform: `translateX(-${mediaIndex}00%)`,
                                    transitionProperty: `transform`,
                                    transitionTimingFunction: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`,
                                    transitionDuration: `500ms`,}} className='flex h-full w-full flex-nowrap'>
                                <YoutubeIframe haveVideo={haveVideo} videoID={videoID}/>
                                {imageLinks.map(function(image, i){
                                    return <div className='w-full shrink-0 h-full'>
                                                <img className='object-cover h-full w-full' src={image}></img>
                                            </div>
                                })}
                            </div>
                            
                                
                            {/* <img src={image_url} className="absolute object-cover h-full w-full "/> */}
                        </div>
                        <div className=' h-2 w-full'></div>
                        <div className='flex relative h-16 sm:h-24 lg:h-1/5 w-full bg-slate-500'>
                            <div onClick={ChangeMedia(-1)} style={{display:haveVideo? 'block' : 'none'}} className='relative shrink-0 h-full aspect-video brightness-75'>
                                
                                <img src='/img/Youtube.svg' className='absolute drop-shadow h-1/2 top-1/4 left-1/4'/>
                                
                                <img className='object-cover h-full w-full' src={videoThumb}></img>
                            </div>
                            {imageLinks.map(function(image, i){
                                return <div onClick={ChangeMedia(i)} className='shrink-0 h-full aspect-video brightness-75'>
                                            <img className='object-cover h-full w-full' src={image}></img>
                                        </div>
                            })}
                            <div style={{transform: `translateX(${mediaIndex}00%)`}}
                                    className='absolute shrink-0 h-full aspect-video border-4 border-slate-200 backdrop-brightness-150'>
                                <img className='absolute  left-[40%] -top-[21%] h-1/5' src='/img/Uptick.svg'></img>
                            </div>

                            <div className='flex items-center absolute inset-y-0 bg-[#ffffff80] w-6 p-1 '>
                                <div className='flex items-center h-10 w-6 '>
                                    <img src='/img/arrow-left.svg' className='drop-shadow'/>
                                </div>
                            </div>
                            <div className='flex items-center absolute inset-y-0 right-0 bg-[#ffffff80] w-6 p-1'>
                                <div className='flex items-center h-10 w-6'>
                                    <img src='/img/arrow-right.svg' className='drop-shadow'/>
                                </div>
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