import { Box, Typography, Card } from "@mui/material";
import CreateUser from "../../components/users/CreateUser";
import CustomModal from "../../components/forms/theme-elements/CustomModal";
import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";

const Users = ({ handleClose }) => {
  const [openUserModal, setOpenUserModal] = useState(false);
  const handleOpenUserModal = () => setOpenUserModal(true);
  const handleCloseUserModal = () => setOpenUserModal(false);
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CustomModal
            openModal={openUserModal}
            handleOpen={handleOpenUserModal}
            handleClose={handleCloseUserModal}
            contentButton={
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconPlus width={18} style={{ marginRight: "5px" }} />
                Registrar Usuario
              </Typography>
            }
          >
            <Card
              className="card"
              sx={{
                padding: 6,
                margin: "auto",
                width: "500px",
                height: "auto",
                flexShrink: 0,
                borderRadius: "12px",
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)",
              }}
            >
              <CreateUser title="Crear usuario" handleClosed={handleClose} />
            </Card>
          </CustomModal>
        </Box>
      </>
  );
};

export default Users;