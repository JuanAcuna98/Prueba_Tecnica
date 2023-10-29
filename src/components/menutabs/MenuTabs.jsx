import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UsuarioTab from "./UsuarioTab";
import CrearTab from "./CrearTab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MenuTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            mt: 7,
            ">div": {
              ">.MuiTabs-flexContainer": {
                justifyContent: "center",

                ">.Mui-selected": {
                  color: "#E32C6D",
                },
              },

              ">span": {
                backgroundColor: "#E32C6D",
              },
            },
          }}
        >
          <Tab label="Usuario" {...a11yProps(0)} disableTouchRipple />
          <Tab label="Registrar Usuario" {...a11yProps(1)} disableTouchRipple />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <UsuarioTab />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <CrearTab />
      </CustomTabPanel>
    </Box>
  );
}
