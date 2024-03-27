import { useEffect, useState } from 'react'

interface ElevatorProps {
  level: number
  queue: number[]
}

export const Elevator = ({ level, queue }: ElevatorProps) => {
  const [closeElevateor, setCloseElevator] = useState(false)

  useEffect(() => {
    if (queue.length > 0) {
      setCloseElevator(true)
      console.log('Queue:', queue)
      // Nastavíme časovač, který odstraní první prvek pole po 1 sekundě
      const timer = setTimeout(() => {
        setCloseElevator(false)
      }, 2000)

      // Vyčištění časovače, pokud komponenta bude odstraněna před vypršením časovače
      return () => clearTimeout(timer)
    }
  }, [queue])
  // each level should be 10% of the total height
  const offset = (level / 10) * 100

  const centerDiv =
    'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'

  return (
    <div
      className="relative flex justify-center rounded-2xl bg-amber-200 w-32 h-[10%] p-2 border-black transition-all duration-500 ease-in-out"
      style={{
        top: `calc(-${offset}% + 10%)`,
        transition: 'all 0.5s ease',
      }}
    >
      <div className="bg-white h-2 w-20 rounded" />
      <div className={`text-black text-2xl font-bold ${centerDiv}`}>
        {level}
      </div>
      <div
        className="absolute bg-slate-600 h-full w-full rounded-2xl top-0"
        style={{
          width: closeElevateor ? '100%' : '0%',
          transition: ' all 0.5s ease-in-out',
        }}
      ></div>
    </div>
  )
}
