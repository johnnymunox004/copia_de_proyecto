import React, { useState } from 'react';
import TableUsuarios from "../components/hola";

function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 font-family-karla flex flex-col sm:flex-row mt-20 min-h-screen fixed">
      {/* Navbar */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <header className="sm:hidden mt-6 fixed w-full bg-sidebar text-white p-4 flex justify-between items-center">
        {isSidebarOpen ? (
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <i className="fas fa-times"></i>
          </button>
        ) : (
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
        )}
        <a href="" className="text-3xl font-semibold uppercase">
          Adminn
        </a>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          <i className="fas fa-bars"></i>
        </button>
      </header>

      <style>
        {`
          @import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");
          .font-family-karla {
            font-family: karla;
          }
          .bg-sidebar {
            background: #3d68ff;
          }
          .cta-btn {
            color: #3d68ff;
          }
          .upgrade-btn {
            background: #1947ee;
          }
          .upgrade-btn:hover {
            background: #0038fd;
          }
          .active-nav-link {
            background: #1947ee;
          }
          .nav-item:hover {
            background: #1947ee;
          }
          .account-link:hover {
            background: #3d68ff;
          }
        `}
      </style>

      {/* Sidebar */}
      <aside
        className={`relative bg-sidebar h-full sm:w-64 w-full sm:h-screen shadow-xl transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <a href="" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
            Adminde
          </a>
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="fas fa-plus mr-3"></i> New Report
          </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <a href="index.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-align-left mr-3"></i>
            Añadir Empleado
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="">
        <TableUsuarios />
      </div>
    </div>
  );
}

export default Admin;
