import { Box, Button, Card, Grid, Typography } from "@mui/material";
import * as cio_image from '../images/cio_banner.jpg';
import Fade from '@mui/material/Fade';
import DocumentViewPopup from "../components/DocumentViewPopup";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import manualCIO from '../assets/Manual de Funciones - CIO.pdf';
import actividadesCIO from '../assets/Actividades - CIO.pdf';
import workflowCIO from '../assets/Workflow - CIO.pdf';
import * as workflowImg from '../images/Workflow - CIO.png';
import {Splide, SplideSlide} from "@splidejs/react-splide";

export const CIOPage = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [pdfFile, setPdfFile] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const toolsCards = [
        {
            title: 'Google Drive',
            description: 'Google Drive es un servicio de alojamiento de archivos. Fue introducido por Google el 24 de abril de 2012. Google Drive es un rebranding de Google Docs que ha existido desde 2010.',
            image: "https://play-lh.googleusercontent.com/t-juVwXA8lDAk8uQ2L6d6K83jpgQoqmK1icB_l9yvhIAQ2QT_1XbRwg5IpY08906qEw"
        },
        {
            title: 'Microsoft Word',
            description: 'Microsoft Word es un programa informático orientado al procesamiento de textos. Fue creado por la empresa Microsoft, y viene integrado predeterminadamente en el paquete ofimático denominado Microsoft Office.',
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png"
        },
        {
            title: 'Microsoft Excel',
            description: 'Microsoft Excel es un programa informático desarrollado y distribuido por Microsoft Corp. para entornos Windows, macOS, iOS y Android. Es un software que permite realizar tareas financieras y contables.',
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1101px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
        },
        {
            title: 'Notion',
            description: 'Notion es una herramienta de gestión de proyectos que permite a los equipos colaborar en tiempo real. Se puede utilizar para gestionar proyectos, tareas, notas, bases de conocimiento, bases de datos, wikis, y mucho más.',
            image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
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
                                Departamento de CIO
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
                        En el Departamento de Tecnologías de la Información (CIO) de nuestra startup dedicada al cuidado de mascotas, nos consideramos líderes apasionados e innovadores comprometidos con la transformación positiva de la experiencia de adopción de mascotas. Nuestra esencia se refleja en una misión clara y una visión audaz que guían cada uno de nuestros pasos.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', paddingX: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Misión
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        Implementar experiencias de adopción de mascotas, como de búsqueda de empresas especializadas en cuidados de mascotas; con una orientación a satisfacer las necesidades del usuario, utilizando las últimas tecnologías.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Visión
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        Obtener reconocimiento como líderes innovadores en la creación y gestión de plataformas tecnológicas que transforman la experiencia de adopción de mascotas, al conectar de manera eficiente a los usuarios con empresas especializadas en cuidados de mascotas, mediante soluciones intuitivas, personalizadas y basadas en datos. Aspiramos a establecer un estándar de excelencia en la industria.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Manual de Funciones
                    </Typography>
                    <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
                        setPdfFile(manualCIO);
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
                                    1. Reunión con los ejecutivos de la empresa.
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    El objetivo principal, es facilitar la alineación estratégica y operativa entre la tecnología de la información y los objetivos generales de la empresa, para poder brindar y crear valor al servicio que dará la empresa.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    2. Revisión de presupuestos para las sub-áreas de tecnología.
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    El propósito principal de esta actividad es asegurar una asignación eficiente de recursos para respaldar las operaciones y proyectos de cada sub-área, garantizando al mismo tiempo la alineación con los objetivos estratégicos de la empresa. La revisión de presupuestos también puede incluir la identificación de posibles áreas de optimización o ajuste para mejorar la eficiencia financiera.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    3. Planificación del desarrollo del proyecto
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    El objetivo principal es asegurar una implementación exitosa del proyecto, cumpliendo con los plazos establecidos y utilizando de manera eficiente los recursos disponibles.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    4. Desarrollo del plan estratégico de la empresa
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    El objetivo general de la actividad es proporcionar una guía clara y unificadora para la organización, estableciendo una dirección a largo plazo que oriente las decisiones y acciones de la empresa. Este plan estratégico tiene como propósito principal definir la visión, misión, metas y estrategias que permitirán a la empresa alcanzar el éxito sostenible en el futuro.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    5. Revisión del proyecto previo a entrega
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    El objetivo principal de esta actividad es garantizar que el proyecto cumpla con los estándares de calidad, funcionalidad y satisfacción del cliente antes de ser entregado oficialmente.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                                    6. Entrega final del proyecto
                                </Typography>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                                    El objetivo principal de la actividad es completar de manera exitosa y formal la implementación y entrega del producto, servicio o resultado final del proyecto a los clientes, usuarios finales u otras partes interesadas.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                    <Button variant='contained' sx={{ textTransform: 'none', marginTop: '2rem' }} onClick={() => {
                        setPdfFile(actividadesCIO);
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
                        setPdfFile(workflowCIO);
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