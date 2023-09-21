import React from "react"
import { useStore } from "../utils/store"

const Task = ({ task }) => {
  const deleteTask = useStore((store) => store.deleteTask)
  const setDraggedTask = useStore((store) => store.setDraggedTask)
  return (
    <div
      draggable
      onDragStart={() => setDraggedTask(task.title)}
      className="bg-white text-black p-2 w-full rounded-md flex flex-col cursor-move"
    >
      <div className="py-2">{task.title}</div>
      <div className="flex items-center justify-between">
        <button onClick={() => deleteTask(task.title)} className="p-1 bg-red-200 text-red-500 rounded-md text-sm">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Task
