interface Params{
    title:string
    type:string
    image_url:string
    description:string
    link:string
    position:number
}

function Project(info:Params){
    let basis = 2;
    let order = 0;
    if(info.position > 2){
        basis = 3;
        order = 2;
    } 
    return(
        <div className={`relative h-[300px] w-full basis-1/${basis} grow order-${order} bg-slate-400`}>
            <div className="bg-emerald-200 w-full h-full p-4">
                <div className="h-full group">
                    <div className="flex rounded-lg w-full h-full shadow-lg justify-center transition-all ease-out group-hover:h-2/5 bg-sky-300">
                        <div className="absolute left-2 top-8 p-2 rounded h-fit w-fit 
                        transition-all ease-out shadow-sm 
                        group-hover:w-0 group-hover:px-0 bg-white">
                            <div className="truncate">{info.type}</div>
                        </div>
                        <div className="flex  h-2/5 bg-red-100 self-end transition-all ease-in group-hover:h-full">
                            <div className="text-4xl font-semibold text-white self-center drop-shadow-md">{info.title}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Project;