import { PropsWithChildren } from 'react'

interface ElevatorProps extends PropsWithChildren {}

export const ElevatorShaft = ({ children }: ElevatorProps) => {
  return (
    <div className="relative w-1/5 bg-black/50 backdrop-blur shadow-2xl rounded-2xl flex justify-center items-end">
      {children}
    </div>
  )
}
