import { Html } from "next/document";

function TopContent(){
    return(
        <div id="top" className="flex-col w-[120%] h-[80vh] px-[10%] ">
            <div className="absolute left-10 top-0 w-[110%] h-full -z-[15]">
                <img className="fixed h-full w-full object-cover" src="/img/mesh dark.png"></img>
                <img className="fixed h-full w-full object-cover dark:opacity-0 transition-all" src="/img/mesh.png"></img>
            </div>
            
            <div className="flex items-end h-2/3 sm:h-3/5">
                <div className="relative bottom-0 w-full items-center dark:text-white transition-all">
                    <h1 className="font-semibold text-7xl md:text-9xl md:text-center">Hi!</h1>
                    <h2 className="md:pt-2 font-semibold text-3xl md:text-5xl md:text-center">My name is Arif</h2>
                    <div className="flex w-full md:justify-center">
                        <p className="py-2 md:py-6 md:text-2xl md:text-center w-3/5">I create games, develop front-end, and animate... animations</p>
                    </div>
                    
                </div>
            </div>
            <div className="flex w-full h-8 justify-center">
                <div className="flex h-full w-fit justify-center gap-12 dark:invert transition-all">
                    <div className="flex-col h-full">
                        <img className="h-full" src="/logos/mail.svg"/>
                        <p className="text-center font-medium">github</p>
                    </div>
                    <div className="flex-col h-full items-center">
                        <img className="h-full" src="/logos/github.svg"/>
                        <p className="text-center font-medium">github</p>
                    </div>
                    <div className="flex-col h-full">
                        <img className="h-full" src="/logos/itchio.svg"/>
                        <p className="text-center font-medium">itch.io</p>
                    </div>
                    <div className="flex-col h-full align-center">
                        <img className="h-full grayscale items-center brightness-0" src="/logos/artstation.svg"/>
                        <p className="text-center font-medium">artstation</p>
                    </div>
                    
                </div>
            </div>
            <div className="flex absolute left-10 top-[86vh] w-[120%] h-[1080px] -z-[10]">
                <div className="flex relative w-full h-full grow">
                    <img className="absolute -top-[700px] lg:-top-[600px] h-[1280px] object-cover dark:grayscale grow dark:invert transition-all" src="/img/Wave.svg"></img>
                </div>
            </div>
        </div>
    )
}


export default TopContent;