import img_marketing from "../../images/logo_marketing.jpg";
import { Button, Card, Grid, Typography, Box
 } from "@mui/material";
import manual from "../../assets/manual_marketing.pdf";
import actividades from "../../assets/actividades_marketing.pdf";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import DocumentViewPopup from "../../components/DocumentViewPopup";
import * as workflowMark from '../../images/workflow_marketing.png';
import workflowMKT from '../../assets/Workflow_marketing.pdf';

function Marketing() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const containerStyle = {
    backgroundImage: `url(${img_marketing})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "400px", // Ajusta la altura según sea necesario
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px", // Ajusta según sea necesario
  };

  const sectionsContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  };

  const sectionStyle = {
    width: "30%", // Ajusta el ancho de las secciones según sea necesario
    padding: "20px",
    backgroundColor: "rgba(247, 215, 131, 0.8)", // Fondo blanco semitransparente
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)", // Sombra sutil
    margin: "20px 0", // Espaciado entre secciones
  };

  const titleStyle = {
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  };

  const titleStyle2 = {
    color: "black",
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  };
  const contentStyle = {
    color: "black",
    fontSize: "1rem",
    lineHeight: "1.5",
    textAlign: "center",
  };

  const titleStyleContainer = {
    color: "white",
    fontSize: "6rem",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 3.5)",
  };

  return (
    <div>
      <div style={containerStyle}>
        <h1 style={titleStyleContainer}>Departamento de Marketing</h1>
      </div>
      <div style={contentContainerStyle}>
        <div style={sectionsContainerStyle}>
          <div style={sectionStyle}>
            <h2 style={titleStyle}>¿Quiénes somos?</h2>
            <p style={contentStyle}>
              El Departamento de Marketing de Little Paw es un equipo apasionado
              y dedicado que impulsa la visión de la empresa a través de
              estrategias innovadoras y creativas. Estamos comprometidos con el
              bienestar de las mascotas y su conexión con las familias,
              promoviendo la adopción responsable y ofreciendo soluciones
              integrales para satisfacer todas las necesidades de los dueños de
              mascotas.
            </p>
          </div>
          <div style={sectionStyle}>
            <h2 style={titleStyle}>Misión</h2>
            <p style={contentStyle}>
              En la actualidad, nuestro enfoque se centra en construir una marca
              sólida y auténtica que fomente la adopción de mascotas,
              proporcionando a nuestros usuarios una experiencia única y
              significativa. Trabajamos incansablemente para conectar a las
              personas con las mascotas adecuadas, facilitando el proceso de
              adopción y ofreciendo recursos esenciales para el cuidado animal.
            </p>
          </div>
          <div style={sectionStyle}>
            <h2 style={titleStyle}>Visión</h2>
            <p style={contentStyle}>
              Aspiramos a convertirnos en la plataforma líder mundial para la
              adopción de mascotas y servicios relacionados. Nuestra visión es
              crear un mundo donde cada mascota tenga un hogar amoroso y donde
              los dueños de mascotas encuentren todo lo que necesitan para el
              bienestar de sus compañeros peludos en un solo lugar. Queremos ser
              reconocidos por nuestro impacto positivo en la comunidad de
              amantes de los animales y por ser pioneros en soluciones
              innovadoras que mejoren la vida de las mascotas y sus familias.
            </p>
          </div>
        </div>
        <h1 style={titleStyle2}
        >Manual de Funciones</h1>

        <Button variant='contained' sx={{ textTransform: 'none', backgroundColor: theme.palette.primary.main, color: 'black', fontWeight: 'bold', fontSize: '2rem'
        }} onClick={() => {
            setPdfFile(manual);
            setOpen(true);
          }}>
            Ver Manual de Funciones
          </Button>
      </div>
      <Grid item xs={12}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }} >
          <h1 style={titleStyle2}>Actividades</h1>
          <Grid container item xs={12} spacing={2} marginBottom={11}>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  1. Desarrollo de Estrategias de Marketing Digital.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                Diseñar e implementar estrategias de marketing digital que maximicen la visibilidad y participación de la marca Little Paw en plataformas online. Estas estrategias deben alinearse con los objetivos comerciales y mejorar la presencia digital de la empresa.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  2. Creación de Contenidos para Campañas Publicitarias.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                Diseñar y producir contenidos publicitarios impactantes que respalden las estrategias de marketing digital, generando interés y participación de la audiencia.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  3. Implementación de Programas de Fidelización de Clientes.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                Establecer programas de fidelización efectivos que incentiven la retención de clientes, generando un vínculo duradero y positivo con la marca Little Paw.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  4. Colaboración en el Diseño de la Experiencia del Cliente en la Plataforma Online.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                Contribuir al diseño y mejora continua de la experiencia del cliente en la plataforma online de Little Paw, buscando maximizar la usabilidad, accesibilidad y satisfacción del usuario.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  5. Análisis de Tendencias del Mercado de Adopción de Mascotas.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                Realizar un análisis exhaustivo de las tendencias actuales y emergentes en el mercado de adopción de mascotas para informar las estrategias comerciales de Little Paw y garantizar una oferta alineada con las demandas del mercado.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  6. Ejecución de Campañas de Responsabilidad Social Corporativa en el Ámbito Animal.
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                Desarrollar y ejecutar campañas de RSC que reflejen el compromiso de Little Paw con la protección y el cuidado de los animales, generando impacto positivo en la sociedad y fortaleciendo la imagen de la marca.
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <h1 style={titleStyle2}
        >Manual de Actividades</h1>
          <Button variant='contained' sx={{ textTransform: 'none', marginTop: '2rem', marginBottom: '3rem', backgroundColor: theme.palette.primary.main, color: 'black', fontWeight: 'bold', fontSize: '2rem' }} onClick={() => {
            setPdfFile(actividades);
            setOpen(true);
          }}>
            Ver Documento de Actividades
          </Button>
          <h1 style={titleStyle2}
        >Workflow</h1>
        <img src={workflowMark.default} alt='Workflow' width='100%' height='100%' style={{ marginBottom: '2rem' }} />
        <Button variant='contained' sx={{ textTransform: 'none', marginTop: '2rem', marginBottom: '3rem', backgroundColor: theme.palette.primary.main, color: 'black', fontWeight: 'bold', fontSize: '2rem' }} onClick={() => {
            setPdfFile(workflowMKT);
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
    </div>
  );
}

export default Marketing;
