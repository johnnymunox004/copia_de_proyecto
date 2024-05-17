import { useEffect } from "react";
import { useTasks } from "../context/taskcontex";
import Taskcard from "../components/task.card.jsx";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
              <img
          src="/v69.jpg"
          className="absolute object-cover w-full h-full "
        />
      <div className="  bg-blue-300 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 px-2 py-20   ">
        {tasks.map((task) => (
          <Taskcard key={task._id} task={task} />
        ))}
      </div>

    </>
  );
}

export default TasksPage;
