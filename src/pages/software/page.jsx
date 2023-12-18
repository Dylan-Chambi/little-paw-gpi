import { Box, Button, Card, Grid, Typography } from "@mui/material";
import * as software_image from '../../images/software_banner.jpg';
import Fade from '@mui/material/Fade';
import DocumentViewPopup from "../../components/DocumentViewPopup";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import manualSoftware from '../../assets/Manual de Funciones - Software.pdf';
import actividadesSoftware from '../../assets/Actividades - Software.pdf';
import workflowSoftware from '../../assets/Workflow - Software.pdf';
import * as workflowImg from '../../images/Workflow - Software.png';

export const SoftwarePage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
      <Grid container>
        <Grid item xs={12}>
          <Fade in={true}>
            <Box sx={{ position: 'relative', display: 'flex' }}>
              <img src={software_image.default} alt='Software' width='100%' height='50%' />
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
                  Departamento de Software
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
              Somos un equipo comprometido, que se ha unido con el propósito de facilitar el proceso de adopción de mascotas a través de la tecnología. Con un equipo, constituido de desarrolladores, diseñadores, devops y QA; creemos que cada mascota merece un hogar amoroso, y estamos dispuestos a hacer todo lo que esté en nuestra mano para hacerlo realidad.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', paddingX: '4rem' }}>
            <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
              Misión
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'center' }}>
              Nuestra área está dedicada al desarrollo de aplicaciones móviles, se tiene como misión formular, proponer e implementar planes que utilicen las tecnologías más recientes, para poder brindar una aplicación de adopción de mascotas que sea entendible y amigable para el usuario.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
            <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
              Visión
            </Typography>
            <Typography variant='body1' sx={{ textAlign: 'center' }}>
              Poder brindar una aplicación móvil, capaz de satisfacer las necesidades referentes a la adopción de mascotas en la ciudad de La Paz, con criterios de calidad y mejora continua en los servicios, tanto de adopción, como de búsqueda de empresas especializadas en mascotas para poder realizar un desarrollo acorde a la tecnología actual.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
            <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
              Manual de Funciones
            </Typography>
            <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
              setPdfFile(manualSoftware);
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
                    1. Análisis de Requerimientos
                  </Typography>
                  <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    Definir los requisitos del sistema, y las acciones necesarias para poder cumplir con el cronograma y presupuestos establecidos para el correcto desarrollo del proyecto.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                  <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                    2. Diseño de la aplicación móvil y backend
                  </Typography>
                  <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    El objetivo principal es planificar cómo se construirá el software para cumplir con los requisitos identificados y, al mismo tiempo, satisfacer criterios como eficiencia, mantenibilidad y usabilidad.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                  <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                    3. Desarrollo de la aplicación móvil y backend
                  </Typography>
                  <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    El objetivo principal es transformar los diseños y especificaciones detalladas, generados durante las fases de análisis y diseño, en un producto de software completamente funcional y ejecutable. Durante esta fase, los programadores y desarrolladores escriben el código fuente del software, realizan pruebas unitarias, integran componentes, depuran errores y optimizan el rendimiento
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                  <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                    4. Pruebas y control de calidad de la aplicación móvil y backend
                  </Typography>
                  <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    El objetivo principal de la actividad de pruebas y control de calidad en el ciclo de vida del desarrollo de software es garantizar que el producto de software cumpla con los requisitos establecidos y que alcance los estándares de calidad definidos antes de ser implementado en un entorno de producción.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                  <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                    5. Entrega de la aplicación móvil y backend
                  </Typography>
                  <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    El objetivo principal de la fase de entrega en el ciclo de vida del desarrollo de software es implementar de manera exitosa el producto desarrollado en un entorno de producción para que esté disponible y sea utilizable por los usuarios finales.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                  <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                    6. Mantenimiento y actualización de la aplicación móvil y backend
                  </Typography>
                  <Typography variant='body1' sx={{ textAlign: 'center' }}>
                    El objetivo principal de la fase de mantenimiento y actualización en el ciclo de vida del desarrollo de software es asegurar que el software continúe siendo funcional, eficiente, seguro y relevante a lo largo del tiempo.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <Button variant='contained' sx={{ textTransform: 'none', marginTop: '2rem' }} onClick={() => {
              setPdfFile(actividadesSoftware);
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
              setPdfFile(workflowSoftware);
              setOpen(true);
            }}>
              Ver Workflow
            </Button>
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

