import { createBrowserRouter } from "react-router-dom";
import ValidatePublicRoute from "./ValidatePublicRoute";
import ValidatePrivateRoute from "./ValidatePrivateRoute";
import { Navigate } from "react-router-dom";

import Login from "../pages/auth/Login"
import Usuarios from "../pages/usuarios"

const router = createBrowserRouter([ 
   //public
    {
        path: "/",
        element: <Navigate to="/auth/Login" />,
      },
      {
        path: "/auth/Login",
        element: (
          <ValidatePublicRoute>
              <Login />
          </ValidatePublicRoute>
        ),
      },
      //private 
      {
        path: "/usuarios",
        element: (
          <ValidatePrivateRoute>
              <Usuarios />
          </ValidatePrivateRoute>
        ),
      },
      {
        path: "/crear",
        element: (
          <ValidatePrivateRoute>
              <Crear />
          </ValidatePrivateRoute>
        ),
      },

]);

export default router;