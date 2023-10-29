import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ValidatePublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  let path = "";

  if (auth.isAuth) {
    if (auth.dataUser) {
      path = "/usuarios";
    } else if (auth.dataUser) {
      path = "/crear";
    } 
  }

  return !auth.isAuth ? children : <Navigate to={path} />;
};

export default ValidatePublicRoute;