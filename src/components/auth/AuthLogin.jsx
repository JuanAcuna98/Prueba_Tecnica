import {
    Box,
    Typography,
    Stack,
    Button,
  } from "@mui/material";
  import { useFormik } from "formik";
  import * as Yup from "yup";
  import { useDispatch } from "react-redux";
  import { onLogin } from "../../redux/slices/authSlices";
  import { customFetch } from "../../services/fetch";
  import { AlertError } from "../../services/alerts";
  import CustomOutlinedInput from "../forms/theme-elements/CustomOutlinedInput";
  
  const AuthLogin = ({ setLogin, values }) => {
    const dispatch = useDispatch();
  
    const { handleSubmit, errors, getFieldProps, touched } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        const newData = { ...values};
        try {
          const resp = await customFetch({
            endpoint: "https://reqres.in/api/login",
            method: "POST",
            body: newData,
          });
          if (resp.success) {
            dispatch(onLogin(resp));
          } 
        } catch (error) {
          AlertError(error);
        }
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required()
          .min(8, "Este campo debe tener un mínimo de 8 caracteres")
          .max(50, "Este campo debe tener un máximo de 50 caracteres"),
        password: Yup.string()
          .required()
          .max(50, "Este campo debe tener un máximo de 50 caracteres"),
      }),
    });
    return (
      <>
        <Typography
          variant="h3"
          mb={1}
          sx={{
            color: "#000",
            textAlign: "center",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "136.188%",
          }}
        >
          {values?.title}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack
            sx={{
              ">div": {
                marginBottom: "25px",
                display: "flex",
                width: "100%",
                alignItems: "center",
                flexShrink: "0",
                textAlign: "center",
              },
            }}
          >
            <Box>
              <CustomOutlinedInput
                {...getFieldProps("email")}
                required
                id="email"
                fullWidth
                placeholder="Digite su usuario"
                error={Boolean(touched.email) && errors.email}
              />
            </Box>
  
            <Box>
              <CustomOutlinedInput
                {...getFieldProps("password")}
                id="password"
                placeholder="Digite su contraseña"
                error={Boolean(touched.password) && errors.password}
                fullWidth
                required
              />
            </Box>
          </Stack>
          <Button
            onClick={handleSubmit}
            sx={{
              background: "#E32C6D",
              borderRadius: "6px",
              display: "inline-flex",
              padding: "8px 24px",
              justifyContent: "center",
              alignItems: "center",
              ":hover": {
                backgroundColor: "#E32C6D",
              },
            }}
            type="submit"
          >
            <Typography sx={{ color: "#fff" }}>Ingresar</Typography>
          </Button>
        </form>
      </>
    );
  };
  
  export default AuthLogin;