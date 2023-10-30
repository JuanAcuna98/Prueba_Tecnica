import { Box, Typography } from "@mui/material";
import UserDataTable from "../../components/usuarios/UserTable";

const Users = ({ handleClose }) => {
  return (
      <>
        <Box>
          <Typography
            sx={{
              color: "#242424",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "25px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              mt: 3,
            }}
          >
            Usuarios
          </Typography>
        </Box>
        <UserDataTable />
      </>
  );
};

export default Users;