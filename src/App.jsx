import { CssBaseline, ThemeProvider } from "@mui/material";
import './App.css'
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import './components/menutabs/MenuTabs.jsx'

function App() {
  const theme = ThemeSettings();
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
