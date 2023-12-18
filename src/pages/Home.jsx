import { Box, Button, Grid, Typography } from "@mui/material";
import * as home_image from '../images/home_banner.jpg';
import * as jerarquico from '../images/jerarquico.jpg';
import Fade from '@mui/material/Fade';
import DocumentViewPopup from "../components/DocumentViewPopup";
import { useState } from "react";
import control_calidad from "../assets/control_calidad.pdf";
import gestion_riegos from "../assets/gestion_riesgos.pdf";
import analisis_costos from "../assets/analisis_costos.pdf";
import plan_sostenibilidad from "../assets/plan_sostenibilidad.pdf";

export const Home = () => {
 
    const [open, setOpen] = useState(false);
    const [pdfFile, setPdfFile] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);


    return (
        <Grid container>
            <Grid item xs={12}>
                <Fade in={true}>
                    <Box sx={{ position: 'relative', display: 'flex' }}>
                        <img src={home_image.default} alt='CIO' width='100%' height='50%' />
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
                                Little Paw
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
                        Little Paw es una startup, que utilizando las más recientes herramientas tecnológicas, busca crear un sistema de adopción basado en una aplicación móvil; para que cualquier persona pueda adoptar y poner adopción a cualquier tipo de mascota. Además, tenemos afiliaciones con empresas especializadas en cuidados de mascotas, como ser: Pet Shops, hoteles para mascotas y veterinarias; para que los nuevos dueños de mascotas tengan toda la información necesaria para cuidar de su nueva mascota.	                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', paddingX: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Misión
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        En Little Paw, nos dedicamos a crear un mundo donde cada animal tenga un hogar lleno de amor y cada persona encuentre a su compañero perfecto. Nuestra misión es facilitar la adopción de perritos y todo tipo de animales, conectando a aquellos que buscan brindar un hogar con aquellos que necesitan uno, y conectar a empresas especializadas en cuidados de mascotas con los nuevos dueños.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Visión
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        En Little Paw, aspiramos a ser la principal plataforma de adopción de mascotas en Bolivia, transformando la forma en que las personas y animales se conectan. Nuestra visión es construir una comunidad boliviana donde cada mascota encuentre un hogar amoroso y cada persona descubra a su compañero ideal. Mediante nuestra aplicación móvil, buscamos no solo facilitar adopciones, sino también ser un recurso clave para la educación y el apoyo en el cuidado de mascotas, colaborando estrechamente con expertos y negocios locales especializados..
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Diagrama Jerárquico
                    </Typography>
                    <img src={jerarquico.default} alt='Diagrama Jerarquico' width='75%' height='75%' style={{ marginBottom: '2rem' }} />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Gestión de Riesgos
                    </Typography>
                    <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
                        setPdfFile(gestion_riegos);
                        setOpen(true);
                    }}>
                        Ver Gestión de Riesgos
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Control de Calidad
                    </Typography>
                    <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
                        setPdfFile(control_calidad);
                        setOpen(true);
                    }}>
                        Ver Control de Calidad
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <a href="https://www.notion.so/4498ac06e85f47a5bc35a915e03558b8?v=41d5089c56c24652bac4f66a4d7e4eb1" target="_blank" rel="noopener noreferrer">
                        <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                            Cronograma Post-Lanzamiento
                        </Typography>
                    </a>

                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Evaluación de costos del emprendimiento
                    </Typography>
                    <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
                        setPdfFile(analisis_costos);
                        setOpen(true);
                    }}>
                        Ver Evaluación de costos del emprendimiento
                    </Button>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Plan de Sostenibilidad
                    </Typography>
                    <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
                        setPdfFile(plan_sostenibilidad);
                        setOpen(true);
                    }}>
                        Ver Plan de Sostenibilidad
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{display:'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Grid item xs={4} sx={{ paddingTop: '6rem' }}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', paddingX: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Conclusiones
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        En la actualidad, el universo de las adopciones de mascotas ha experimentado un crecimiento notable gracias a las constantes innovaciones en el ámbito empresarial. En un entorno sumamente competitivo, las startups dedicadas a la adopción de animales deben buscar propuestas creativas que agreguen valor a su misión, permitiéndoles destacar y fomentar la lealtad de sus adoptantes. En este contexto, nace nuestra startup, Little Paw, con la misión de alcanzar metas ambiciosas al ofrecer una amplia variedad de opciones para la adopción de mascotas, brindando experiencias únicas que llenan de alegría a las familias adoptivas. Nuestra dedicación se ha traducido en un éxito palpable, con resultados positivos que reflejan el impacto positivo que generamos en la vida de las mascotas y sus nuevos dueños.
                       </Typography>
                </Box>
            </Grid>

            <Grid item xs={4}>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
                    <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
                        Recomendaciones
                    </Typography>
                    <Typography variant='body1' sx={{ textAlign: 'center' }}>
                        Se destaca la importancia de contar con un equipo de trabajo idóneo en el ámbito de la adopción de mascotas, ya que se ha evidenciado que constituye una parte fundamental para el éxito de nuestra startup. Asimismo, se sugiere la implementación de políticas orientadas a garantizar el cumplimiento de las necesidades y objetivos de la empresa en este noble propósito de brindar hogares amorosos a las mascotas sin hogar. En nuestro compromiso con la excelencia, nos esforzamos por establecer directrices que fortalezcan la eficacia de nuestro equipo y aseguren la satisfacción tanto de las mascotas adoptadas como de las familias que las acogen.
                    </Typography>
                </Box>
            </Grid>
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