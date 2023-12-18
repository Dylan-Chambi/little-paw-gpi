import { Box, Button, Card, Grid, Typography } from "@mui/material";
import * as software_image from '../images/software_banner.jpg';
import Fade from '@mui/material/Fade';
import DocumentViewPopup from "../components/DocumentViewPopup";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import manualSoftware from '../assets/manual_de_funciones_software.pdf';
import actividadesSoftware from '../assets/actividades_software.pdf';
import workflowSoftware from '../assets/workflow_software.pdf';
import * as workflowImg from '../images/Workflow - Software.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const SoftwarePage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const toolsCards = [
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
    {
      title: 'Figma',
      description: 'Figma es una herramienta de diseño de interfaces de usuario y prototipado basada en la web. Figma permite a múltiples usuarios colaborar en un proyecto en tiempo real.',
      image: "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format"
    },
    {
      title: 'Draw.io',
      description: 'Draw.io es una herramienta de diagramación en línea gratuita y de código abierto que se puede utilizar para crear diagramas de flujo, organigramas, diagramas de red, wireframes, diagramas UML, mapas mentales y más.',
      image: "https://drawio-app.com/wp-content/uploads/2021/05/drawio_logo_RGB_symbol_large.png"
    },
    {
      title: 'Android Studio',
      description: 'Android Studio es un entorno de desarrollo integrado para el sistema operativo Android. Fue lanzado por Google en 2013 y reemplazó al Eclipse Android Development Tools como el IDE principal para el desarrollo de aplicaciones para Android.',
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1200px-Android_Studio_icon_%282023%29.svg.png"
    },
    {
      title: 'Kotlin',
      description: 'Kotlin es un lenguaje de programación de propósito general, multiplataforma y de tipado estático que se ejecuta en la máquina virtual de Java. Fue desarrollado por JetBrains en 2011 y su nombre proviene de la isla de Kotlin, cerca de San Petersburgo.',
      image: "https://ricardogeek.com/wp-content/uploads/2017/08/kotlin_250x250.png"
    },
    {
      title: 'Express.JS',
      description: 'Express.js, o simplemente Express, es un marco de aplicación web para Node.js, lanzado como software gratuito y de código abierto bajo la Licencia MIT. Está diseñado para crear aplicaciones web y API.',
      image: "data:image/png;base64,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"
    },
    {
      title: 'SQLite',
      description: 'SQLite es una biblioteca que implementa un motor de base de datos SQL transaccional autónomo, sin servidor, de cero configuración y de propósito general.',
      image: "data:image/jpeg;base64,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"
    },
    {
      title: 'JUnit',
      description: 'JUnit es un framework de pruebas para el lenguaje de programación Java creado por Erich Gamma y Kent Beck. Es una implementación de xUnit para Java. JUnit se utiliza principalmente para el desarrollo de código orientado a objetos, y es apropiado para la programación dirigida por pruebas.',
      image: "https://www.comparatif-logiciels.fr/wp-content/uploads/2021/06/junit-avis-tarif-alternative-comparatif-logiciels-saas.webp"
    },
    {
      title: 'Jest',
      description: 'Jest es un framework de pruebas de JavaScript creado por Facebook. Se centra en la simplicidad y la velocidad. Funciona con proyectos que utilizan Babel, TypeScript, Node.js, React, Angular, Vue.js y Svelte. Jest no requiere ninguna configuración para comenzar a usarlo. Con Jest, puede probar proyectos que usan Webpack, Babel, TypeScript y Node.js.',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbl8isgudgwefP3mR9FdfTbtFpda_d_ZUUWWXlP-dMUjHyVsPo5WjzVo7h4G3AbJSwAk&usqp=CAU"
    },
    {
      title: 'Git',
      description: 'Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.',
      image: "data:image/png;base64,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"
    },
    {
      title: 'JMeter',
      description: 'JMeter es una herramienta de software de código abierto diseñada para cargar pruebas de rendimiento y medir el rendimiento funcional. Se puede utilizar para probar la carga funcional y medir el rendimiento de una variedad de servicios, incluidos los servicios web (HTTP, HTTPS), bases de datos JDBC, servidores de aplicaciones (CORBA, JMS), servicios de correo / LDAP, y servidores de bases de datos.',
      image: "https://testingbaires.com/wp-content/uploads/2019/11/JMeter_00.png"
    },
    {
      title: 'Play Store',
      description: 'Google Play, antes llamada Android Market, es una plataforma de distribución digital de aplicaciones móviles para los dispositivos basados en el sistema operativo Android, así como una tienda en línea desarrollada y operada por Google. Sirve como la tienda oficial de aplicaciones para el sistema operativo Android, permitiendo a los usuarios navegar y descargar aplicaciones desarrolladas con el kit de desarrollo de software de Android y publicadas mediante Google.',
      image: "https://pbs.twimg.com/profile_images/1551615678418788353/F49R5U9C_400x400.png"
    },



  ]

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

