import { useEffect } from "react";
import { useTasks } from "../context/taskcontex";
import Taskcard from "../components/task.card.jsx";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if ((tasks.length === 0)) return (<h1>no hay tareas</h1>);

  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <Taskcard key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TasksPage;
