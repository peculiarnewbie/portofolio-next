import { useState, useCallback } from 'react'

function useForceUpdate(fn, val) {
  fn(val+1)
  console.log(val)
}

export{
    useForceUpdate
}