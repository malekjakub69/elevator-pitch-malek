import { useEffect, useState } from 'react'

export const useElevatorStore = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(1)
  const [queue, setQueue] = useState<number[]>([])

  useEffect(() => {
    if (queue.length > 0) {
      const timer2 = setTimeout(() => {
        setCurrentFloor(queue[0])
      }, 1000)

      const timer = setTimeout(() => {
        setQueue((prev) => prev.slice(1))
      }, 3000)

      return () => {
        clearTimeout(timer), clearTimeout(timer2)
      }
    }
  }, [queue])

  const addRequest = (floor: number) => {
    if (queue.includes(floor)) return
    if (currentFloor === floor) return
    setQueue((prev) => [...prev, floor])
  }

  return { addRequest, currentFloor, queue }
}
