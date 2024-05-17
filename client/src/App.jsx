import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerpage from "./pages/register";
import Loginpage from "./pages/login";
import { Authprovider } from "./context/AuthContex.jsx";

import TasksPage from "./pages/Taskspage.jsx";
import TasksformPage from "./pages/tasksformpage.jsx";
import HomePage from "./pages/homepage.jsx";
import Profilepage from "./pages/profilepae.jsx";
import ProtecRoutes from "./ProtecRoutes.jsx";
import { Navigate } from "react-router-dom";
import { TaskProvider } from "./context/taskcontex.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <Authprovider>
      <TaskProvider>
        <BrowserRouter>
          <main className=" bg-indigo-900">
            <Navbar />

            <Routes>
              {/* ruts pulicaas */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Loginpage />} />
              <Route path="/register" element={<Registerpage />} />

              <Route element={<ProtecRoutes />}>
                {/* rutas privadas */}
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TasksformPage />} />
                <Route path="/task/:id" element={<TasksformPage />} />
                <Route path="/profile" element={<Profilepage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </Authprovider>
  );
}

export default App;
