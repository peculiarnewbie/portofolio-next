interface Params{
    title:string
    type:string
    image_url:string
    description:string
    link:string
    position:number
}

function ProjectDetail(info:Params){
    let basis = 2;
    let order = 0;
    if(info.position > 2){
        basis = 3;
        order = 2;
    } 
    return(
        <div className={`relative h-[720px] w-full basis-full grow order-1 bg-slate-400`}>
            <div className="bg-emerald-200 w-full h-full p-4">
                <div className="h-full group">
                    <div className="rounded-lg w-full h-full shadow-lg bg-orange-300">
                        <div className="absolute left-2 top-8 p-2 rounded h-fit w-fit 
                        transition-all ease-out shadow-sm 
                        group-hover:w-0 group-hover:px-0 bg-white">
                            <div className="truncate">{info.type}</div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}


export default ProjectDetail;