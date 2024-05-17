import { date } from "zod";
import { useTasks } from "../context/taskcontex";
import { Link } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc);

function Taskcard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className=" bg-zinc-800 max-w-md w-full p-8 rounded-md z-10 ">
      <header className=" flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className=" flex gap-x-2 items-center">
          <button
          className=" bg-red-500 text-white px-4 py-2"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            eliminar
          </button>

          <Link to={`/task/${task._id}`}
          className=" bg-blue-500 hover:bg-blue-600 text-white px4 py-2 rounded-md">editar</Link>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p>{days(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
}

export default Taskcard;
