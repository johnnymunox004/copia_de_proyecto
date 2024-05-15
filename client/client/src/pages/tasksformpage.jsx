import { useForm } from "react-hook-form";
import { useTasks } from "../context/taskcontex";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { date } from "zod";
dayjs.extend(utc);

function TasksformPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createtask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dateValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
      
    };


    if ((params.id)) {
      updateTask(params.id, dateValid);
    } else {
      createtask(dateValid);
    }
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className=" bg-zinc-900  max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            placeholder="tiitle"
            {...register("title")}
            className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <label htmlFor="descripccion">descripccion</label>

          <textarea
            rows="3"
            placeholder="description"
            {...register("description")}
            className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <label htmlFor="date">date</label>
          <input
            type="date"
            className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("date")}
          />

          <button className=" bg-indigo-500 py-2 px-3 rounded-sm">save</button>
        </form>
      </div>
    </div>
  );
}

export default TasksformPage;
