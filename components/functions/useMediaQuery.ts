import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width:any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e:any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', e => updateTarget(e))

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', e => updateTarget(e))
  }, [])

  return targetReached;
};

const calculateScroll = (): number => {
  const [fromTop, setFromTop] = useState(0.0);

  useEffect(() => {
    window.addEventListener("scroll", event => {
      setFromTop(window.scrollY);
    })
  }, [])
  
  return fromTop;

}

export default useMediaQuery;

export {calculateScroll, useMediaQuery}