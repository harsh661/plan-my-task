import { create } from "zustand"

const store = (set) => ({
  tasks: [],
  draggedTask: null,
  setTask: (title, status) =>
    set((store) => ({ tasks: [...store.tasks, { title, status }] })),
  deleteTask: (title) => {
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    }))
  },
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, status) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, status } : task
      ),
    })),
})

export const useStore = create(store)
