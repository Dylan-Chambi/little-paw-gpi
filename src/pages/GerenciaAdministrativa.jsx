import { Box, Button, Card, Grid, Typography } from "@mui/material";
import * as gerencia_image from '../images/gerencia_administrativa_banner.png';
import Fade from '@mui/material/Fade';
import DocumentViewPopup from "../components/DocumentViewPopup";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import manualGerencia from '../assets/Manual_de_Funciones_Gerencia.pdf';
import actividadesGerencia from '../assets/Actividades_Gerencia.pdf';
import workflowSoftware from '../assets/Workflow_Gerencia.pdf';
import * as workflowImg from '../images/workflow_gerencia.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const GerenciaAdministrativaPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const toolsCards = [
    {
      title: 'Notion',
      description: 'Notion es una plataforma todo en uno para la gestión de proyectos, tareas, documentos y bases de datos, fomentando la colaboración y comunicación del equipo.',
      image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
    },
    {
      title: 'SAP ERP',
      description: 'SAP ERP es una solución de planificación de recursos empresariales que integra los procesos de negocio clave de una organización en un sistema unificado.',
      image: "https://th.bing.com/th/id/OIP.HVeiQrOTeeorKVA0Q4jybQHaHa?rs=1&pid=ImgDetMain"
    },
    {
      title: 'Tableau',
      description: 'Tableau es una herramienta líder en análisis y visualización de datos que ayuda a transformar datos brutos en insights comprensibles.',
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png"
    },
    {
      title: 'QuickBooks',
      description: 'QuickBooks es una solución de contabilidad que permite a las pequeñas y medianas empresas llevar a cabo el seguimiento de gastos, crear facturas y obtener informes financieros.',
      image: "https://th.bing.com/th/id/R.07e104427eebddbfa02102372b50da68?rik=uq6f5OZ9o5h3ig&pid=ImgRaw&r=0"
    },
    {
      title: 'Zoom',
      description: 'Zoom es una plataforma de comunicaciones unificadas que proporciona videoconferencias, reuniones en línea, chat y colaboración móvil.',
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg"
    },
    {
      title: 'Google Drive',
      description: 'Google Drive es un servicio de almacenamiento y sincronización de archivos que permite el almacenamiento en la nube, el uso compartido de archivos y la colaboración colaborativa en documentos, hojas de cálculo y presentaciones.',
      image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
    },
    {
      title: 'Salesforce',
      description: 'Salesforce es una plataforma de gestión de relaciones con clientes (CRM) que permite a las empresas conectar con sus clientes de una manera más eficiente y efectiva.',
      image: "https://th.bing.com/th/id/R.ef017bea65f458e9bd2af0b377926d1b?rik=MG%2fEd93NCHk0cA&pid=ImgRaw&r=0"
    },
    {
      title: 'draw.io',
      description: 'draw.io es una herramienta de diagramación en línea gratuita que se utiliza para crear una variedad de diagramas incluyendo diagramas de flujo, organigramas, y diagramas de red.',
      image: "https://th.bing.com/th/id/R.6a57b46c70b9cddd93d3fdbffc790cf5?rik=rxnB%2fI%2bwl0lEnw&pid=ImgRaw&r=0"
    },
    {
      title: 'Google Analytics',
      description: 'Google Analytics es un servicio de análisis web que proporciona estadísticas y herramientas analíticas básicas para la optimización de motores de búsqueda y marketing.',
      image: "https://th.bing.com/th/id/R.fd988fcb3fd4567fd7f537e1192b1bee?rik=jt7e1qEBtTHMTQ&pid=ImgRaw&r=0"
    },
    {
      title: 'Microsoft Power BI',
      description: 'Power BI es un conjunto de herramientas de análisis de negocios que permite convertir datos de diversas fuentes de datos en informes interactivos y dashboards.',
      image: "https://th.bing.com/th/id/OIP.o0uCtAzhEYOEqTUgic9bSwHaHu?rs=1&pid=ImgDetMain"
    },
    {
      title: 'Adobe Acrobat',
      description: 'Adobe Acrobat es una familia de aplicaciones de software y servicios web desarrollados por Adobe Inc. para visualizar, crear, manipular, imprimir y gestionar archivos en formato PDF.',
      image: "https://th.bing.com/th/id/R.7d7ba0ee0ccf0074f18c909ba896b52c?rik=XLwA6JmAZ2FI1w&pid=ImgRaw&r=0"
    },
    {
      title: 'Asana',
      description: 'Asana es una herramienta de gestión de tareas y proyectos que mejora la colaboración y comunicación del equipo para equipos que no utilizan Notion.',
      image: "https://th.bing.com/th/id/R.416e5884934ef3d01a380f5b43089fd4?rik=BziPfmQqa4QG7A&pid=ImgRaw&r=0"
    }
  ]

  return (
    <Grid container>
      <Grid item xs={12}>
        <Fade in={true}>
          <Box sx={{ position: 'relative', display: 'flex' }}>
            <img src={gerencia_image.default} alt='Software' width='100%' height='50%' />
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
                Gerencia Administrativa
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
            La Gerencia Administrativa de Little Paw es el núcleo operativo que impulsa la eficiencia y el crecimiento sostenible de nuestra startup. Compuesta por profesionales dedicados, trabajamos incansablemente detrás de escena para asegurar una gestión fluida y efectiva. Nuestra tarea es esencial para mantener una estructura sólida que soporte nuestra misión de conectar mascotas con hogares amorosos a través de la tecnología.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', paddingX: '4rem' }}>
          <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
            Misión
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'center' }}>
            Nuestra misión es garantizar la excelencia operativa y la integridad financiera de Little Paw. Nos comprometemos a proporcionar los recursos y el soporte necesarios para que todas las áreas de la empresa funcionen sin problemas, asegurando así la mejor experiencia posible para los usuarios de nuestra plataforma y el bienestar de las mascotas que ayudamos a adoptar.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
          <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
            Visión
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'center' }}>
            La visión de la Gerencia Administrativa es ser el pilar sobre el cual Little Paw construye su éxito y expansión. Aspiramos a establecer un modelo de gestión administrativa que sea referente en el sector de startups tecnológicas, caracterizado por su innovación, responsabilidad y capacidad de adaptación a las necesidades cambiantes de nuestra comunidad y las mascotas que servimos.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '4rem' }}>
          <Typography variant='h4' sx={{ marginBottom: '2rem' }}>
            Manual de Funciones
          </Typography>
          <Button variant='contained' sx={{ textTransform: 'none' }} onClick={() => {
            setPdfFile(manualGerencia);
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
                  1. Gestión Financiera
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  Asegurar una gestión financiera eficiente y transparente para mantener la solidez económica de Little Paw, facilitando su crecimiento sostenible y cumplimiento de objetivos estratégicos.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  2.	Gestión de Recursos Humanos
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  Desarrollar y mantener una fuerza laboral altamente cualificada y comprometida que apoye los objetivos estratégicos de Little Paw, a través de un enfoque en el bienestar del empleado, el desarrollo profesional y la satisfacción laboral.  </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  3.	Gestión de Operaciones
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  Optimizar los procesos operativos para maximizar la productividad y calidad en la entrega de servicios, alineando las operaciones con las expectativas del cliente y los objetivos estratégicos de la empresa.   </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  4.	Gestión de Riesgos
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  Minimizar la exposición de la empresa a riesgos internos y externos, asegurando la continuidad del negocio y la protección de los activos de la empresa.   </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  5.	Gestión de Proyectos
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  Ejecutar proyectos con éxito, cumpliendo con los parámetros de calidad, tiempo y presupuesto establecidos, para impulsar la innovación y el crecimiento de la empresa.   </Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5', '&:hover': { background: theme.palette.primary.main, color: 'white', transition: 'background 0.5s ease', } }}>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                  6.	Gestión Legal y de Cumplimiento
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}>
                  Proteger a Little Paw de posibles litigios y riesgos regulatorios, y asegurar que todas las operaciones y transacciones cumplan con los marcos legales aplicables, promoviendo la ética y la integridad en todas las prácticas comerciales. </Typography>
              </Card>
            </Grid>
          </Grid>
          <Button variant='contained' sx={{ textTransform: 'none', marginTop: '2rem' }} onClick={() => {
            setPdfFile(actividadesGerencia);
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

