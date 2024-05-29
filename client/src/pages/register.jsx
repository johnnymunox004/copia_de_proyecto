import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex.jsx";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Registerpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAtuthenticated, errors: registerErrors } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (isAtuthenticated) {
      navigate("/tasks");
    }
  }, [isAtuthenticated]);
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>  
              <img
          src="/v68.jpg"
          className="absolute object-cover w-full h-full "
        />
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="  bg-slate-600 max-w-md p-10 rounded-md z-10">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}

<form onSubmit={onSubmit}>
  <h1 className=" bg-slate-600 text-2xl font-bold ">register</h1>

  <input
    type="text"
    {...register("username", { required: true })}
    className=" bg-zinc-700 w-full bg tex-white px-4 py-2 rounded-md my-2"
    placeholder="Username"
  />
  {errors.username && (
    <p className=" text-red-500">Username is required</p>
  )}
  <input
    type="email"
    {...register("email", { required: true })}
    className="w-full bg-zinc-700 tex-white px-4 py-2 rounded-md my-2"
    placeholder="email"
  />
  {errors.email && <p className=" text-red-500">email is required</p>}
  <input
    type="password"
    {...register("password", { required: true })}
    className="w-full bg-zinc-700 tex-white px-4 py-2 rounded-md my-2"
    placeholder="password"
  />
  {errors.password && (
    <p className=" text-red-500">password is required</p>
  )}
  <input
    type="number"
    {...register("edad", { required: true })}
    className="w-full bg-zinc-700 tex-white px-4 py-2 rounded-md my-2"
    placeholder="Edad"
  />
  {errors.edad && (
    <p className=" text-red-500">Edad is required</p>
  )}
  <input
    type="text"
    {...register("departamento", { required: true })}
    className="w-full bg-zinc-700 tex-white px-4 py-2 rounded-md my-2"
    placeholder="Departamento"
  />
  {errors.departamento && (
    <p className=" text-red-500">Departamento is required</p>
  )}
  <input
    type="text"
    {...register("rol", { required: true })}
    className="w-full bg-zinc-700 tex-white px-4 py-2 rounded-md my-2"
    placeholder="Rol"
  />
  {errors.rol && (
    <p className=" text-red-500">Rol is required</p>
  )}
  <button type="submit" className=" bg-blue-500 rounded-sm py-2 px-2">
    Register
  </button>
</form>

        <p className=" flex gap-x-2 justify-between">
          ya tienes una cuenta?{""}
          <Link
            to="/login"
            className=" bg-blue-500 rounded-sm py-2 px-2 text-white"
          >
            login
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Registerpage;
