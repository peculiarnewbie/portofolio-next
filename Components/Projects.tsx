function Projects({header, children}:Params){
    return(
        <div className="w-full bg-orange-200">
            <p className="font-bold text-4xl m-4">{header}</p>
            <div className="flex flex-1 flex-wrap gap-y-4">
                {children}
            </div>
            
        </div>
    )
}


export default Projects;

interface Params{
    header:string
    children:any
}