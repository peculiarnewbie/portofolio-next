function TopContent(){
    return(
        <div id="top" className="w-full h-[600px]">
            <div className="absolute left-0 top-0 w-[100%] h-[600px] z-[-1] bg-fixed bg-cover bg-center bg-[url('/cloud-bg.png')]">
                {/* <img className="" src="/img/cloud-bg.png"></img> */}
            </div>
            <div className="flex items-end h-full">
                <div className="relative bottom-0 w-3/5">
                    <h1 className="font-semibold text-5xl md:text-9xl">Hi!</h1>
                    <h2 className="font-semibold text-2xl md:text-5xl">I'm Arif</h2>
                    <p className="py-2 md:py-6 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}


export default TopContent;