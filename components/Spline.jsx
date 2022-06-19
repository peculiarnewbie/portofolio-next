import React from 'react';

import Spline from '@splinetool/react-spline';
import useMediaQuery from '../components/functions/useMediaQuery'

function SplineScene(){
    const isSmallScreen = useMediaQuery(1024);

    return(
        <div className='flex-col h-96 z-10 w-full'>
            <div className='w-full'>
                <p className="font-bold text-4xl m-4 text-center">Check out more:</p>
            </div>
            <div className=' h-[20vw] w-full'>
                
                    <Spline scene = "https://prod.spline.design/04vaYbm-QUg8-FFi/scene.splinecode"/>
                
            </div>
        </div>
    )
}

export default SplineScene;