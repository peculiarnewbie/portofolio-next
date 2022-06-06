import React, { useState, useEffect } from 'react';

interface Params{
    project:any
    closeFunction:any
}

function ProjectDetail(info:Params){

    let title = info.project.properties.Name.title[0]?.plain_text
    let description = info.project.properties.Description.rich_text[0]?.plain_text
    let link = info.project.properties.Link.url
    let image_url = info.project.properties.Images.files[0]?.file?.url
    let type = info.project.properties.Type.select?.name
    let position = info.project.properties.Position?.number

    return(
        <div>
            <div className="bg-emerald-200 w-full h-full p-4">
                <div className="h-full group">
                    <div className="rounded-lg w-full h-full shadow-lg bg-orange-300">
                        <div className="absolute left-2 top-8 p-2 rounded h-fit w-fit 
                        transition-all ease-out shadow-sm 
                        group-hover:w-0 group-hover:px-0 bg-white">
                            <div className="truncate">{type}</div>
                        </div>
                        <a onClick={info.closeFunction}>
                            <div className="absolute right-6">x</div>
                        </a>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}


export default ProjectDetail;