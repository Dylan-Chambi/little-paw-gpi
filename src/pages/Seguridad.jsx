import { Box, Button, Card, Grid, Typography } from "@mui/material";
import * as cio_image from '../images/cio_banner.jpg';
import Fade from '@mui/material/Fade';
import DocumentViewPopup from "../components/DocumentViewPopup";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import manualSeguridad from '../assets/manual_de_funciones_seguridad.pdf';
import actividadesSeguridad from '../assets/actividades_seguridad.pdf';
import workflowSeguridad from '../assets/workflow_seguridad.pdf';
import * as workflowImg from '../images/workflow_seguridad.png';
import {Splide, SplideSlide} from "@splidejs/react-splide";

export const Seguridad = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [pdfFile, setPdfFile] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const toolsCards = [
        {
            title: 'Wireshark',
            description: 'Wireshark es un analizador de protocolos de red de código abierto y gratuito. Analiza los datos de una red en vivo o de un archivo de captura almacenado en disco. Puede interactuar con esas fuentes de datos mediante su interfaz gráfica de usuario (GUI) o mediante el terminal TTY-mode TShark.',
            image: "https://miro.medium.com/v2/resize:fit:960/1*sOhbhWnnmBx7TxHddLPW0Q.png"
        },
        {
            title: 'Nessus',
            description: 'Nessus es una de las herramientas más conocidas para escanear vulnerabilidades. Permite a los usuarios identificar vulnerabilidades que podrían ser explotadas por atacantes, así como comprobar si los sistemas están configurados de acuerdo con ciertos estándares de seguridad.',
            image: "https://cdn.cs.1worldsync.com/9b/f4/9bf4adb3-bcbb-413b-9510-629d45552f87.jpg"
        },
        {
            title: 'Snort',
            description: ' Snort es un sistema de prevención de intrusiones (IPS) y sistema de detección de intrusiones (IDS) de código abierto. Monitorea el tráfico de red en tiempo real y realiza un análisis de protocolo, búsqueda de contenido y puede ser usado para detectar una variedad de ataques y sondas, como buffer overflows, stealth port scans, ataques CGI, SMB probes, OS fingerprinting, y mucho más.',
            image: "https://luismiguelmorales.com/wp-content/uploads/2022/06/snort-image-portada-180.jpg"
        },
        {
            title: 'Metasploit',
            description: 'Metasploit es un marco de prueba de penetración (pen-testing) que facilita el descubrimiento de vulnerabilidades y la gestión de evaluaciones de seguridad. Ofrece una plataforma para desarrollar y ejecutar exploits contra una máquina remota y es utilizado por profesionales de seguridad para pruebas de penetración y equipos de respuesta a incidentes para validar vulnerabilidades.',
            image: "https://seela.io/wp-content/uploads/2023/06/kisspng-white-hat-metasploit-project-exploit-computer-secu-framework-5abc4f057e9f52.9579908515222904375187.png"
        },
        {
            title: 'Kali Linux',
            description: 'Descripción: Kali Linux es una distribución de Linux que viene cargada con una amplia gama de herramientas para la seguridad informática. Es ampliamente utilizada por profesionales de la seguridad para pruebas de penetración, investigación de seguridad, análisis forense y evaluación de vulnerabilidades. Incluye herramientas como Nmap, OWASP ZAP, Aircrack-ng, entre otras.',
            image: "https://miro.medium.com/v2/resize:fit:750/1*iBf0eI_RiqroBKOPmzeqfQ.jpeg"
        },

    ]

    return (
        <Grid container>
            <Grid item xs={12}>
                <Fade in={true}>
                    <Box sx={{ position: 'relative', display: 'flex' }}>
                        <img src={cio_image.default} alt='CIO' width='100%' height='50%' />
                        <Box
                            sx={{
                                position: 'absolute',
                                color: 'white',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))'
                            }}
                        >

                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '20%',
                                transform: 'translate(-45%, -50%)',
                                textAlign: 'center',
                                color: 'white',
                                width: '100%'
                            }}
                        >
                            <Typography sx={{ fontSize: '4vw' }} variant='h1' component='div' gutterBottom>
                                Departamento de Seguridad
                            </Typography>
                        </Box>
                    </Box>
                </Fade>
            </Grid>
            <Grid item xs={4} sx={{ paddingTop: '6rem' }}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', paddingX: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        ¿Quiénes somos?
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        El Departamento de Ciberseguridad de Little Paw es la línea de defensa esencial para proteger nuestros datos digitales y sistemas informáticos. Compuesto por expertos en seguridad informática, nos enfocamos en salvaguardar la integridad, confidencialidad y disponibilidad de la información de la empresa y sus usuarios. Nuestro papel es vital para preservar la confianza y la seguridad en todas nuestras operaciones digitales.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', paddingX: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Misión
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        Nuestra misión es asegurar la infraestructura tecnológica de Little Paw contra amenazas digitales. Nos comprometemos a implementar prácticas de seguridad robustas, monitorear proactivamente posibles vulnerabilidades y responder eficientemente ante incidentes de ciberseguridad, garantizando así un entorno digital seguro para nuestros usuarios y sus mascotas.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Visión
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        Aspiramos a ser un referente en ciberseguridad dentro del sector tecnológico, destacando por nuestra capacidad de adaptarnos a las amenazas cambiantes y por emplear tecnologías de vanguardia. Nuestro objetivo es crear un entorno digital que no solo sea seguro, sino que también fomente la innovación y el crecimiento sostenible de Little Paw.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Manual de Funciones
                    </Typography>
                    <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
                        setPdfFile(manualSeguridad);
                        setOpen(true);
                    }}>
                        Ver Manual de Funciones
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Actividades
                    </Typography>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    1. Auditoría de Seguridad.
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    Garantizar la robustez de las medidas de seguridad y la resiliencia frente a amenazas cibernéticas, manteniendo la protección de datos y la continuidad operativa de Little Paw.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    2. Formación en Ciberseguridad.
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    Incrementar la conciencia sobre ciberseguridad entre los empleados, reduciendo significativamente el riesgo de incidentes de seguridad internos.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    3. Gestión de Incidentes de Seguridad
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    Responder de manera rápida y efectiva a incidentes de seguridad, minimizando el impacto en las operaciones de la empresa y la pérdida de datos.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    4. Desarrollo y Mantenimiento de Infraestructuras de Seguridad
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    Mantener una infraestructura de seguridad robusta y actualizada para proteger contra amenazas cibernéticas externas e internas.

                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    5. Cumplimiento Normativo en Ciberseguridad
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    Garantizar el cumplimiento total con las normativas para evitar sanciones legales y mantener la reputación de la empresa.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                    <Button variant='contained' sx={{ textTransform: 'none', marginTop: '2rem' }} onClick={() => {
                        setPdfFile(actividadesSeguridad);
                        setOpen(true);
                    }}>
                        Ver Documento de Actividades
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Workflow
                    </Typography>
                    <img src={workflowImg.default} alt='Workflow' width='100%' height='100%' style={{ marginBottom: '2rem' }} />
                    <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
                        setPdfFile(workflowSeguridad);
                        setOpen(true);
                    }}>
                        Ver Workflow
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ background: theme.palette.primary.main, color: 'white' }}>
                <Box sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Herramientas
                    </Typography>
                    <Box
                        sx={{
                            marginBottom: '4rem',
                            paddingX: '1rem',
                        }}
                    >
                        <Splide aria-label="My Favorite Images"
                                options={{
                                    type: 'loop',
                                    perPage: 3,
                                    perMove: 1
                                }}
                        >
                            {toolsCards.map((card, index) => (
                                <SplideSlide key={index}>
                                    <Card sx={{
                                        padding: '2rem',
                                        margin: '1rem',
                                        textAlign: 'center',
                                        background: '#f5f5f5',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                            {card.title}
                                        </Typography>
                                        <img src={card.image} alt={card.title} style={{ marginBottom: '2rem', height: '100px' }} />
                                        <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                            {card.description}
                                        </Typography>
                                    </Card>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </Box>
                </Box>
            </Grid>
            {pdfFile &&
                <DocumentViewPopup
                    open={open}
                    handleClose={() => setOpen(false)}
                    documentURL={pdfFile}
                    buttonDisabled={buttonDisabled}
                    setButtonDisabled={setButtonDisabled}
                />}
        </Grid>
    );
};