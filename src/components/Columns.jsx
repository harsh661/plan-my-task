import React, { useMemo, useState } from "react"
import { useStore } from "../utils/store"
import Task from "./Task"

const Columns = ({ status }) => {
  const tasks = useStore((store) => store.tasks)
  const setTask = useStore((store) => store.setTask)
  const setDraggedTask = useStore((store) => store.setDraggedTask)
  const draggedTask = useStore((store) => store.draggedTask)
  const moveTask = useStore((store) => store.moveTask)

  const [isDragged, setIsDragged] = useState(false)

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  )

  const addTask = () => {
    const title = prompt("Enter a task")
    setTask(title, status)
  }

  const handleDrag = (e) => {
    e.preventDefault()
    setIsDragged(true)
  }

  const handleDrop = () => {
    moveTask(draggedTask, status)
    setDraggedTask(null)
    setIsDragged(false)
  }

  return (
    <div
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onDragLeave={()=>setIsDragged(false)}
      className={`w-80 p-5 h-max min-h-[200px] rounded-md border ${isDragged ? 'bg-zinc-950 border-gray-500': 'bg-zinc-900 border-transparent'}`}
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-medium">{status}</h2>
        <button onClick={addTask}>Add</button>
      </div>
      <div className="flex flex-col items-center gap-5">
        {filteredTasks.map((task, i) => (
          <Task key={task.title + i} task={task} />
        ))}
      </div>
    </div>
  )
}

export default Columns
