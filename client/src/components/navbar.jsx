import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContex";

function Navbar() {
  const { isAtuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-zinc-600 my-3 w-1/1 flex justify-between py-5 px-10 rounded-lg ">
      <Link to={isAtuthenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold">tareas</h1>
      </Link>
      
      <ul className="flex flex-col gap-x-2 gap-y-3 md:flex-row">
        {isAtuthenticated ? (
          <>
            <li>Welcome {user.username}</li>
            <li>
              <Link
                to="/add-task"
                className=" bg-indigo-500 px-4 py-1 rounded-sm"
              >
                añadirtarea
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
                className=" bg-indigo-500 px-4 py-1 rounded-sm"
              >
                logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className=" bg-indigo-500 px-4 py-1 rounded-sm">
                login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className=" bg-indigo-500 px-4 py-1 rounded-sm"
              >
                register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
