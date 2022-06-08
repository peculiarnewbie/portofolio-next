function Projects({header, children}:Params){

    let childCount = children[0].length

    var orderArray = [];

    for(var i=0; i < childCount; i++){
        orderArray.push(i)
    }



    return(
        <div className="w-full relative shadow-up">
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
                <div style={{order: `999`}} className='relative w-full'>
                    <div id={`projectDetail-999`}
                        className={`absolute w-full h-10 -top-[1000px] pointer-events-none`}>
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