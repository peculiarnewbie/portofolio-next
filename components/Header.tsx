function Header(){
    function ToggleDark(){
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          
          if(localStorage.theme == 'light') localStorage.theme = 'dark'
          else localStorage.theme = 'light'
          
          // Whenever the user explicitly chooses dark mode
    }
    return(
        <div className="flex w-[100vw] h-16 md:h-20 p-4 top-0 fixed z-50">
            <div className="flex h-full w-1/2">
                <div className="h-[120%] aspect-square self-center">
                    <img src="/img/logo.png"/>
                </div>
            </div>
            <div className="flex h-full w-1/2 justify-end mr-2">
                <div onClick={ToggleDark}
                className="flex relative h-full aspect-[2] p-2 rounded-full dark:bg-neutral-800 bg-orange-400 shadow-inner transition-all cursor-pointer">
                    <div className="absolute h-full w-1/2 pb-3 -mt-0.5 z-20 transition-transform dark:translate-x-[90%]">
                        <div className="rounded-full h-full aspect-square bg-white"></div>
                    </div>
                    <div className="h-full w-1/2 ">
                        <img className="invert h-full" src="/img/moon.svg"/>
                    </div>
                    <div className="relative h-full w-1/2 self-end">
                        <img className="invert h-full absolute right-0" src="/img/sun.svg"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Header;