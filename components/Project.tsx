import { useEffect } from "react"

import {CalculateOrder, CalculateColor} from "./functions/Calculations"
import parseNotionObject from "../pages/api/parseNotionObject"
import useMediaQuery from '../components/functions/useMediaQuery'

interface Params{
    title:string
    type:string
    image_url:string
    description:string
    link:string
    position:number
}

interface SimpleParams{
    project:any
    active:number
    changeStatus:any
    changeDetail:any
    isMobileSize:boolean
}

function Project(info:SimpleParams){

    const {title, link, image_url, type, position, summary, basis} = parseNotionObject(info.project)
    const isSmallScreen = useMediaQuery(768);

    async function handleClick() {
        info.changeDetail(position, order)
        info.changeStatus(true)
    }

    let order = CalculateOrder(position)

    let basisPer 
    if(!isSmallScreen) basisPer = `${(100/basis).toString()}%`
    else basisPer = "100%"

    let color = CalculateColor(type)
    

    return(
        <div style={{order: `${order}`, flexBasis:`${basisPer}`}} 
            className='relative h-[200px] md:h-[300px] w-full my-2'>
            <div className='w-full h-full p-4'>
                    <a onClick={handleClick}>
                        <div className="h-full group cursor-pointer ">
                            <div className="flex relative rounded-lg w-full h-full shadow-lg shadow-gray-400 dark:shadow-black transition-all ease-out group-hover:h-2/5">
                                <div className="absolute h-full w-full rounded-lg z-10 shadow-inner-project pointer-events-none"></div>
                                {/* <img src={image_url} className="absolute object-cover h-full w-full group-hover:scale-75"/> */}
                                <div style={{backgroundColor: `${color}`}} 
                                    className="absolute -left-4 top-4 p-2 rounded h-fit w-fit 
                                    transition-all ease-out shadow-sm z-10
                                    group-hover:w-0 group-hover:px-0 bg-white">
                                    <div className="truncate font-sans font-medium">{type}</div>
                                </div>
                                <div className="flex relative bg-sky-300 w-full rounded-lg justify-center overflow-hidden">
                                    <img src={image_url} className="absolute object-cover h-full w-full group-hover:scale-150 transition-all"/>
                                    <div className="flex  h-2/5 self-end transition-all ease-in group-hover:h-full z-10">
                                        <div className="text-4xl font-semibold text-white self-center drop-shadow-text">{title}</div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="h-3/5 w-4/5 absolute bottom-4 left-[10%] rounded-lg bg-white 
                                        dark:bg-zinc-800 -z-10 shadow-inner-lg px-4 pt-8 text-center overflow-auto 
                                        text-xs md:text-base dark:text-slate-300">
                                {summary}
                            </div>
                        </div>
                    </a>
            </div>
        </div>
    )
}


export default Project;