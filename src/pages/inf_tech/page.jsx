import { Box, Button, Card, Grid, Typography } from "@mui/material";
import * as it_image from '../../images/it_banner.jpg';
import Fade from '@mui/material/Fade';
import DocumentViewPopup from "../../components/DocumentViewPopup";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import manualIT from '../../assets/Manual de Funciones - IT.pdf';
import actividadesIT from '../../assets/Actividades - IT.pdf';
import workflowIT from '../../assets/Workflow - IT.pdf';
import * as workflowImg from '../../images/Workflow - IT.png';

export const InfTechPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Fade in={true}>
          <Box sx={{ position: 'relative', display: 'flex' }}>
            <img src={it_image.default} alt='IT' width='100%' height='100%' />
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
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                width: '100%'
              }}
            >
              <Typography sx={{ fontSize: '4vw' }} variant='h1' component='div' gutterBottom>
                Departamento de IT
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
            Somos un equipo de IT encargado de administrar y gestionar el apartado de redes y sistemas. Siendo los responsables de crear un entorno aislado para trabajar dentro de una red con distintas configuraciones como puede ser el acceso, permisos, protocolos, control de usuarios y demás. Por el lado de sistemas, nos encargamos de proporcionar y monitorizar todos los servicios necesarios para el funcionamiento del sistema.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', paddingX: '4rem' }}>
          <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
            Misión
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'center' }}>
            Administrar y asegurar los distintos servicios para el sistema, a través del uso y control de redes y sistemas. Gestionando principalmente accesos, permisos, protocolos y servidores.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
          <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
            Visión
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'center' }}>
            Ser un equipo capaz de brindar servicios con la mayor disponibilidad y resiliencia. Para así brindar a los usuarios la mayor confianza posible a la hora de utilizar nuestro sistema.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
          <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
            Manual de Funciones
          </Typography>
          <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
            setPdfFile(manualIT);
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
                  1. Desarrollo de políticas de gestión de tecnología.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  Definir e implementar las políticas de para la gestión informática que dan las pautas y rigen para la gestión, el uso adecuado y la seguridad de la información de los sistemas informáticos y en general, sobre el ambiente tecnológico de la empresa “TIGO”, para su interiorización, aplicación y verificación permanente.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  2. Construcción de un manual de buenas prácticas de seguridad informática adaptado a las necesidades de la empresa.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  El objetivo principal de la construcción de este manual es proporcionar a los usuarios internos una guía clara y práctica que les permita adoptar y mantener prácticas seguras en el uso de la tecnología y la gestión de la información.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  3. Programación de presupuestos para proyectos y mejoras tecnológicas.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  La programación de presupuestos para proyectos y mejoras tecnológicas es garantizar una asignación eficiente y efectiva de recursos financieros que respalden el desarrollo, implementación y mantenimiento de proyectos tecnológicos.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  4. Coordinación de ejercicios de respuesta a incidentes de indisponibilidad o poca tolerancia a fallos.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  El objetivo de la coordinación de ejercicios de respuesta a incidentes de indisponibilidad o poca tolerancia a fallos es mejorar la resiliencia y capacidad de recuperación de una organización frente a eventos que puedan afectar la disponibilidad de sus sistemas críticos.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  5. Evaluación y selección de herramientas y tecnologías de seguridad para fortalecer la infraestructura tecnológica.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  El objetivo principal de la evaluación y selección de herramientas y tecnologías de seguridad es fortalecer la postura de seguridad de la infraestructura tecnológica de la organización.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  6. Mantenimiento y actualización de políticas de acceso y autorización a sistemas y datos sensibles.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  El objetivo principal de esta actividad es asegurar que la infraestructura tecnológica y los datos sensibles de la organización estén protegidos de manera eficiente y en línea con las mejores prácticas de seguridad.
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Button variant='contained' sx={{ textTransform: 'none', marginTop: '2rem' }} onClick={() => {
            setPdfFile(actividadesIT);
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
            setPdfFile(workflowIT);
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

