import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ValidatePrivateRoute = ({ children, permissions }) => {
  const auth = useSelector((state) => state.auth);
  const isAllowed = permissions
    ? permissions.some((item) => item === userRol)
    : true;

  return auth.isAuth && isAllowed ? children : <Navigate to={"/"} />;
};

export default ValidatePrivateRoute;