import clsx from 'clsx'

interface ElevatorControlsProps {
  addRequest: (floor: number) => void
  queue: number[]
  currentFloor: number
}

const LEVELS = 10

export const ElevatorControls = ({
  addRequest,
  queue,
  currentFloor,
}: ElevatorControlsProps) => {
  return (
    <div className="flex items-center rounded-2xl bg-black/10 shadow-2xl backdrop-blur px-10">
      <div className="flex flex-col space-y-2">
        {Array.from({ length: LEVELS }, (_, i) => {
          const level = LEVELS - i
          const buttonStyle = clsx({
            'rounded-2xl text-white font-bold text-2xl text-center': true,
            'bg-black/20': !queue.includes(level) && level !== currentFloor,
            'bg-amber-400': queue.includes(level) && level !== currentFloor,
            'bg-amber-600': currentFloor === level,
          })
          return (
            <button
              key={i}
              className={buttonStyle}
              onClick={() => addRequest(level)}
            >
              {level}
            </button>
          )
        })}
      </div>
    </div>
  )
}
