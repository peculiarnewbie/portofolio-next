function Projects({header, children}:Params){

    let childCount = children[0].length

    var orderArray = [];

    for(var i=0; i < childCount; i++){
        orderArray.push(i)
    }



    return(
        <div className="w-full relative pb-8">
            <div className="absolute h-full -left-[100%] top-[550px] lg:top-[650px] w-[300%] -z-[11] bg-slate-200 shadow-up"></div>
            
            <div className="absolute w-1/2 h-10 -left-1/2 z-20  "></div>
            <p className="font-bold text-4xl m-4">{header}</p>
            <div className="flex flex-1 flex-wrap ">
                {children}
                {orderArray.map(function(order, i){
                    return <div style={{order: `${order}`}} className='relative w-full'>
                        <div id={`projectDetail-${order}`}
                            className={`absolute w-full h-10 -top-[200px] pointer-events-none`}>
                        </div>
                    </div>
                })}
                <div style={{order: `998`}} className='relative w-full'>
                    <div id={`projectDetail-999`}
                        className={`absolute w-full h-10 -top-[200px] pointer-events-none`}>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Projects;

interface Params{
    header:string
    children:any
}