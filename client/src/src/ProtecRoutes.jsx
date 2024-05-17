import { useAuth } from "./context/AuthContex";
import { Navigate , Outlet } from "react-router-dom";


function ProtecRoutes () {
    const {loading,user, isAtuthenticated }=useAuth()
    console.log(loading,isAtuthenticated)


    if(loading) return <h1>caragando....</h1>
    if(!loading && !isAtuthenticated){
        return <Navigate to="/login" replace />
    }
    
    return (
      <Outlet />
    );
  };
  
  export default ProtecRoutes;