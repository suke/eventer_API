import { useEffect, useRef } from 'react'

export function useOnMount(currentState, callback) {
  const isFirstMount = useRef(true)
  const lastStateRet = useRef({})

  useEffect(() => {
    if (isFirstMount.current) {
      callback(currentState)
      isFirstMount.current = false
    }
    lastStateRet.current = currentState
  })
}
