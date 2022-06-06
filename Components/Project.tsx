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
    changeStatus:any
    changeDetail:any
}

function Project(info:SimpleParams){

    let title = info.project.properties.Name.title[0]?.plain_text
    let description = info.project.properties.Description.rich_text[0]?.plain_text
    let link = info.project.properties.Link.url
    let image_url = info.project.properties.Images.files[0]?.file?.url
    let type = info.project.properties.Type.select?.name
    let position = info.project.properties.Position?.number

    const handleStatus = info.changeStatus

    let basis = 2;
    let order = 0;
    if(position > 2){
        basis = 3;
        order = 2;
    } 

    return(
        <div className={`relative h-[300px] w-full basis-1/${basis} grow order-${order} bg-slate-400`}>
            <div className="bg-emerald-200 w-full h-full p-4">
                <div className="h-full group" onClick={handleStatus}>
                    <div className="flex rounded-lg w-full h-full shadow-lg justify-center transition-all ease-out group-hover:h-2/5 bg-sky-300">
                        <div className="absolute left-2 top-8 p-2 rounded h-fit w-fit 
                        transition-all ease-out shadow-sm 
                        group-hover:w-0 group-hover:px-0 bg-white">
                            <div className="truncate">{type}</div>
                        </div>
                        <div className="flex  h-2/5 bg-red-100 self-end transition-all ease-in group-hover:h-full">
                            <div className="text-4xl font-semibold text-white self-center drop-shadow-md">{title}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

// function Project(info:Params){
//     let basis = 2;
//     let order = 0;
//     if(info.position > 2){
//         basis = 3;
//         order = 2;
//     } 
//     return(
//         <div className={`relative h-[300px] w-full basis-1/${basis} grow order-${order} bg-slate-400`}>
//             <div className="bg-emerald-200 w-full h-full p-4">
//                 <div className="h-full group">
//                     <div className="flex rounded-lg w-full h-full shadow-lg justify-center transition-all ease-out group-hover:h-2/5 bg-sky-300">
//                         <div className="absolute left-2 top-8 p-2 rounded h-fit w-fit 
//                         transition-all ease-out shadow-sm 
//                         group-hover:w-0 group-hover:px-0 bg-white">
//                             <div className="truncate">{info.type}</div>
//                         </div>
//                         <div className="flex  h-2/5 bg-red-100 self-end transition-all ease-in group-hover:h-full">
//                             <div className="text-4xl font-semibold text-white self-center drop-shadow-md">{info.title}</div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }


export default Project;