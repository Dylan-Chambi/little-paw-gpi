import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./config/themes";
import { RouterProvider } from 'react-router-dom';
import router from "./routes/router";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;