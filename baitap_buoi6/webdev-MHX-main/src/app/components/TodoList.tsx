"use client";

import { Task } from "../page";
import TodoItem from "./TodoItem";

const TodoList = ({
  tasks,
  ToggleTask,
  deleteTask,
  editTask
}: {
  tasks: Task[],
  ToggleTask: (id: number) => void,
  deleteTask: (id: number) => void,
  editTask: (id: number, newTitle: string) => void
}) => {
  return (
    <ul className="w-full">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          ToggleTask={ToggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  )
}
export default TodoList