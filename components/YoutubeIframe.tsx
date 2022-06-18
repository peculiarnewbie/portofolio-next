

interface Params{
    videoID:string
    haveVideo:boolean
}

function YoutubeIframe(info:Params){
    return(
        <div style={{display:info.haveVideo? 'block' : 'none'}} className='overflow-hidden pb-[56.25%] relative h-0 w-full shrink-0'>
            <iframe className='h-full w-full absolute top-0 left-0' width="853"
                height="480"
                src={`https://www.youtube.com/embed/${info.videoID}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"/>
        </div>
    )
}

export default YoutubeIframe