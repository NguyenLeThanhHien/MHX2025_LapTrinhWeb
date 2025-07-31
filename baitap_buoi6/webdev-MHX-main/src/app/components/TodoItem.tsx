"use client";

import { Task } from "../page";
import { useState } from "react";

const TodoItem = ({
  task,
  ToggleTask,
  deleteTask,
  editTask
}: {
  task: Task,
  ToggleTask: (id: number) => void,
  deleteTask: (id: number) => void,
  editTask: (id: number, newTitle: string) => void
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleEdit = () => {
    if (isEditing && editValue.trim() !== "") {
      editTask(task.id, editValue);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="w-full flex justify-between items-center gap-2 py-2 border-b border-gray-700">
      {isEditing ? (
        <input
          className="border p-1 rounded text-black"
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") handleEdit();
          }}
        />
      ) : (
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.title}
        </span>
      )}
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => ToggleTask(task.id)}
        />
        <button
          className="text-blue-500 hover:text-blue-700 font-bold px-2"
          onClick={handleEdit}
        >
          {isEditing ? "Lưu" : "Sửa"}
        </button>
        <button
          className="text-red-500 hover:text-red-700 font-bold px-2"
          onClick={() => deleteTask(task.id)}
        >
          Xóa
        </button>
      </div>
    </li>
  )
}

export default TodoItem