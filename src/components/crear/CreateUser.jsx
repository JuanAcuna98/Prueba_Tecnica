import { Box, Typography, Button, Grid } from "@mui/material";
import CustomTextField from "../../../src/components/forms/theme-elements/CustomTextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { customFetch } from "../../service/fetch";
import { useEffect } from "react";
import { AlertSuccess, AlertError, AlertCharging } from "../../service/alerts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const AuthUser = ({ title, handleClosed, subtitle, subtext }) => {
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getDataSelect();
  }, []);

  const {
    handleSubmit,
    errors,
    getFieldProps,
    values,
    setFieldValue,
    resetForm,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      job: "",
    },
    onSubmit: async () => {
      createUser();
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es requerido")
        .min(2, "Este campo debe tener un mínimo de 2 caracteres")
        .max(50, "Este campo debe tener un máximo de 50 caracteres"),

      job: Yup.string()
        .required("Este campo es requerido")
        .min(2, "Este campo debe tener un mínimo de 2 caracteres")
        .max(50, "Este campo debe tener un máximo de 50 caracteres"),
    }),
  });
  const navigate = useNavigate();
  const createUser = async () => {
    try {
      handleClosed && handleClosed();
      AlertCharging();

      const resp = await customFetch({
        endpoint: "https://reqres.in/api/users",
        token: token,
        body: values,
        method: "POST",
      });

      if (resp.success) {
        await AlertSuccess("Usuario creado con éxito");
        resetForm();
        navigate("/Usuarios");
        window.location.reload();
      } else {
        AlertError(resp.message);
      }
    } catch (error) {
      // pageLoadError();
    }
  };
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}
      {subtext}
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item sx={{ padding: "15px 0px", width: "100%" }}>
            <CustomTextField
              placeholder="Nombre"
              {...getFieldProps("name")}
              id="name"
              variant="outlined"
              sx={{
                ">div": {
                  ">input": {
                    textTransform: "uppercase",
                  },
                },
              }}
              fullWidth
              error={Boolean(touched.name) && errors.name}
              helperText={touched.name && errors.name}
            />
          </Grid>

          <Grid item sx={{ padding: "15px 0px", width: "100%" }}>
            <CustomTextField
              placeholder="Cargo"
              {...getFieldProps("job")}
              id="job"
              variant="outlined"
              fullWidth
              error={Boolean(touched.job) && errors.job}
              helperText={touched.job && errors.job}
              sx={{
                ">div": {
                  ">input": {
                    textTransform: "uppercase",
                  },
                },
              }}
            />
          </Grid>
          </Grid>
        <Box
          sx={{
            width: "91px",
          }}
        >
          <Button
            sx={{
              marginTop: "20px",
              background: "#E32C6D",
              borderRadius: "6px",
              display: "inline-flex",
              padding: "8px 24px",
              color: "#fff",
              ":hover": {
                background: "#E32C6D",
              },
            }}
            type="submit"
            fullWidth
          >
            Enviar
          </Button>
        </Box>
        {subtitle}
      </form>
    </>
  );
};

export default AuthUser;