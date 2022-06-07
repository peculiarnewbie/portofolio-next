function Projects({header, children}:Params){
    let childCount = children[0].length

    var orderArray = [];

    for(var i=0; i < childCount; i++){
        orderArray.push(i)
    }

    return(
        <div className="w-full">
            <p className="font-bold text-4xl m-4">{header}</p>
            <div className="flex flex-1 flex-wrap gap-y-4">
                {children}
                {orderArray.map(function(order, i){
                    return <div className={`relative order-${order}`}>
                        <div id={`projectDetail-${order}`}
                            className={`absolute w-full h-10 -top-[200px]`}>
                        </div>
                    </div>
                })}
            </div>
            
        </div>
    )
}


export default Projects;

interface Params{
    header:string
    children:any
}