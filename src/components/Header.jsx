import { AppBar, Container, Toolbar, Typography, Box, Button } from "@mui/material";
import logo from '../images/logo.png';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const pages = [{
    name: 'CIO',
    path: 'cio'
}, {
    name: 'Gerencia',
    path: 'gerencia'
}, {
    name: 'Software',
    path: 'software'
}, {
    name: 'Marketing',
    path: 'marketing'
}, {
    name: 'Seguridad',
    path: 'seguridad'
}, {
    name: 'IT',
    path: 'it'
}, {
    name: 'Contacto',
    path: 'contacto'
}]

const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <header className="header" role="banner">
            <AppBar color="secondary" className='appbar'>
                <Container maxWidth='x1'>
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', height: '5rem' }}>
                        <a href='/' className='header__logo'>
                            <img src={logo} alt='Logo' width='80' height='80' />
                        </a>
                        <Typography
                            className='header__title'
                            variant="h6"
                            noWrap
                            onClick={() => navigate('/')}
                            sx={{
                                ml: 2,
                                mr: 2,
                                flexGrow: 8,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                '&:hover': {
                                    color: theme.palette.primary.main,
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            LITTLE PAW
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    onClick={() => navigate(`/${page.path}`)}
                                >
                                    {page.name}
                                </Button>
                            ))}

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
};

export default Header;