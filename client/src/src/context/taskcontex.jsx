import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,getTaskRequest,updateTaskRequest,
} from "../api/task.js";

const taskcontext = createContext();

export const useTasks = () => {
  const context = useContext(taskcontext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, seTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      seTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createtask = async (tasks) => {
    const res = await createTaskRequest(tasks);
    console.log(res);
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status == 204) seTasks(tasks.filter((task) => task._id != id));
    } catch (error) {
      console.log(error);
    }
  };

 
  
  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data
    } catch (error) {
      console.log(error);
    }
  };

const updateTask = async (id , task) =>{
  try {
    await updateTaskRequest(id,task)
  } catch (error) {
    console.error(error);
  }
}






  return (
    <taskcontext.Provider value={{ tasks, createtask,getTask, updateTask,getTasks, deleteTask }}>
      {children}
    </taskcontext.Provider>
  );
}
