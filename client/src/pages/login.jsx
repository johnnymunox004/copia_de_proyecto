import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Loginpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signerrors, isAtuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAtuthenticated) navigate("/tasks");
  }, [isAtuthenticated]);

  return (
    <>
          <img
          src="/hola.jpg"
          className="absolute object-cover w-full h-full "
        />
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
  

        <div className="bg-slate-600 max-w-md w-full p-10 rounded-md z-10">
          {signerrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))}
          <h1 className="text-2xl font-bold">login</h1>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="email"
            />
            {errors.email && (
              <p className="text-red-500">email is required</p>
            )}
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="password"
            />
            {errors.password && (
              <p className="text-red-500">password is required</p>
            )}
            <button
              type="submit"
              className="bg-blue-500 rounded-sm py-2 px-2"
            >
              entrar
            </button>
          </form>
          <p className="flex gap-x-2 justify-between">
            no tienes una cuenta?
            <Link
              to="/register"
              className="bg-blue-500 rounded-sm py-2 px-2 text-white"
            >
              sing up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
