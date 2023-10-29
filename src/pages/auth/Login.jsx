import { useState, useEffect } from "react";
import { Box, Card } from "@mui/material";
import { customFetch } from "../../services/fetch";
import { AlertError } from "../../services/alerts";
import AuthLogin from "../../components/auth/AuthLogin";

export default function Login() {


  const [values, setValues] = useState([]);
  const [login, setLogin] = useState(true);
  const getData = async () => {
    try {
      const resp = await customFetch({
        endpoint: "https://reqres.in/api/login",
        isLoader: false,
      });
      if (resp.success) {
        setValues(resp.data.data_json);
      } else {
        AlertError(resp.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
      <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "inherit",
                overflow: "auto",
                position: "relative",
                padding: "20px",

                "@media (max-width: 600px)": {
                  height: "100vh",
                },

                // CARD LOGIN
                ">div": {
                  maxWidth: "500px",
                  minWidth: "360px",
                  minHeight: "685px",
                  flexShrink: 0,
                  padding: "50px",
                  marginX: "20px",
                  borderRadius: "12px",
                  boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10",
                },
              }}
            >
              <Card className="card">
                {login ? (
                  <AuthLogin setLogin={setLogin} values={values} />
                ) : (
                  <AuthRegister setLogin={setLogin} valuesAPI={values} />
                )}
              </Card>
            </Box>
            </Box>
  )
}