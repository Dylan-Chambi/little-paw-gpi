import { Box } from "@mui/material";
import Header from "./Header";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Box>
            <Header />
            <Box sx={{ marginTop: '5rem' }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;