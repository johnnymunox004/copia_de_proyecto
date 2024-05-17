import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContex";

function Navbar() {
  const { isAtuthenticated, logout, user } = useAuth();
  return (
    <nav style={{ backgroundColor: '#1d2a56' }} className= "bg-indigo-800 fixed top-0 left-0 right-0 w-full flex justify-between py-5 px-56 rounded-lg z-10 ">
      <Link to={isAtuthenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold">tareas</h1>
      </Link>
      
      <ul className="flex flex-col gap-x-2 gap-y-3 md:flex-row">
        {isAtuthenticated ? (
          <>
            <li >Welcome {user.username}</li>
            <li>
              <Link
                to="/add-task"
                className="  bg-indigo-500 px-4 py-1 rounded-sm"
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
              <Link to="/login" className="  bg-indigo-500 px-4 py-1 rounded-sm">
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
