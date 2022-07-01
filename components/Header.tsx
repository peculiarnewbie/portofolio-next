import { calculateScroll } from "./functions/useMediaQuery";
import { useEffect, useState } from "react";


function Header(){
    let scroll = calculateScroll()
    let opacity = scroll/300 - 0.5
    let bgcolor
    
    

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

    function headerBG(){
        if(typeof localStorage == 'undefined') return;
        else{
            if(localStorage.theme == 'light') bgcolor = '23 23 23'
            else bgcolor = '241 245 249'
        }
    }

    useEffect(() => {
        headerBG()
    })

    return(
        <div className="flex w-[100vw] h-16 md:h-16 p-4 md:p-3 md:px-5 top-0 fixed z-50 overflow-hidden">
            <div style={{opacity: `${opacity}`}} className="absolute -top-full -left-full h-[250%] w-[250%] bg-slate-100 dark:bg-zinc-800 transition-colors"></div>
            <div className="flex h-full w-1/2">
                <a href="https://peculiarnewbie.com/">
                    <div className="relative h-[120%] aspect-square self-center dark:invert hover:rotate-45 hover:scale-110 dark:brightness-0 transition-all">
                        <img className="absolute -top-1" src="/img/logo.png"/>
                    </div>
                </a>
            </div>
            <div className="flex h-full w-1/2 justify-end mr-2">
                <div onClick={ToggleDark}
                className="flex relative h-full aspect-[2] p-2 rounded-full dark:bg-neutral-700 bg-orange-400 shadow-inner transition-all cursor-pointer">
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