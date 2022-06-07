function Projects({header, children}:Params){

    let childCount = children[0].length

    var orderArray = [];

    for(var i=0; i < childCount; i++){
        orderArray.push(i)
    }



    return(
        <div className="w-full bg-lime-200">
            <p className="font-bold text-4xl m-4">{header}</p>
            <div className="flex flex-1 flex-wrap">
                {children}
                {orderArray.map(function(order, i){
                    return <div style={{order: `${order}`}} className='relative w-full'>
                        <div id={`projectDetail-${order}`}
                            className={`absolute w-full h-10 -top-[200px] pointer-events-none`}>
                        </div>
                    </div>
                })}
                <div className='relative w-full order-999'>
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