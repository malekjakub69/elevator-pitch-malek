import './App.css'
import { Building } from './components/building.component.tsx'
import { ElevatorControls } from './components/elevator-controls.component.tsx'
import { ElevatorShaft } from './components/elevator-shaft.component.tsx'
import { Elevator } from './components/elevator.component.tsx'
import { useElevatorStore } from './useElevatorStore.ts'

function App() {
  const { addRequest, currentFloor, queue } = useElevatorStore()

  return (
    <main className="w-full h-full absolute top-0 left-0 bg-gray-900">
      <Building>
        <ElevatorControls
          addRequest={addRequest}
          queue={queue}
          currentFloor={currentFloor}
        />
        <ElevatorShaft>
          <Elevator queue={queue} level={currentFloor} />
        </ElevatorShaft>
      </Building>
    </main>
  )
}

export default App
