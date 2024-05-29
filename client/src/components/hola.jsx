import React from "react";

const empleados = [
  { id: 1, nombre: 'Juan Perez', edad: 28, salario: 50000, rol: 'Desarrollador', departamento: 'TI' },
  { id: 2, nombre: 'Ana Gomez', edad: 34, salario: 60000, rol: 'Diseñadora', departamento: 'Marketing' },
  // Agrega más empleados según sea necesario
];

function TableUsuarios() {
  return (
    <main className="flex-grow p-6 fixed">
      <div className="bg-white p-4 rounded-lg shadow-md overflow-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nombre</th>
              <th className="py-3 px-6 text-left">Edad</th>
              <th className="py-3 px-6 text-left">Salario</th>
              <th className="py-3 px-6 text-center">ID</th>
              <th className="py-3 px-6 text-left">Rol</th>
              <th className="py-3 px-6 text-left">Departamento</th>
              <th className="py-3 px-6 text-center">Editar</th>

            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm font-light">
            {empleados.map((empleado) => (
              <tr key={empleado.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{empleado.nombre}</td>
                <td className="py-3 px-6 text-left">{empleado.edad}</td>
                <td className="py-3 px-6 text-left">{empleado.salario}</td>
                <td className="py-3 px-6 text-center">{empleado.id}</td>
                <td className="py-3 px-6 text-left">{empleado.rol}</td>
                <td className="py-3 px-6 text-left">{empleado.departamento}</td>
                <td className="py-3 px-6 text-center">
                  <button className="text-blue-500 hover:text-blue-700">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default TableUsuarios;
