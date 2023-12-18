import { Box, Button, Card, Grid, Typography } from "@mui/material";
import * as it_image from '../images/it_banner.jpg';
import Fade from '@mui/material/Fade';
import DocumentViewPopup from "../components/DocumentViewPopup";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import manualIT from '../assets/Manual_de_Funciones_IT.pdf';
import actividadesIT from '../assets/Actividades_IT.pdf';
import workflowIT from '../assets/Workflow_IT.pdf';
import * as workflowImg from '../images/workflow-it.png';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

export const InfTechPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const toolsCards = [
    {
      title: 'Notion',
      description: 'Notion es una herramienta de gestión de proyectos que permite a los equipos colaborar en tiempo real. Se puede utilizar para gestionar proyectos, tareas, notas, bases de conocimiento, bases de datos, wikis, y mucho más.',
      image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
    },
    {
      title: 'Zabbix',
      description: 'Zabbix es una herramienta de monitoreo de redes y sistemas, libre y de código abierto. Permite monitorizar la disponibilidad y el rendimiento de los equipos informáticos, como servidores, redes y dispositivos de red.',
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEXTHyb////QAAD++vrkgIPSDhnRAAnRAAXTFR765OX76enxvsDzx8jTHCPSGCDRCRX88fLRABDvt7neZGj329zXNjvYPUPid3rqoaP99vb11NXmjpDnlJbdXmLyw8XkhIfaTVHUJCvbVlr53+HsrK7rqKrYQkbliYzfam3VLDPheHzdYGT10NLpnJ7gcHTNbZB2AAADJ0lEQVR4nO3d23aiQBCFYcTQoAYIxmNOxhhjDpr3f7yY66qbWdNMO3v93xO410hN0WxMlgEAAAAAAAAAAAAAAAAAAAAA8J/J+5Q63K9mNOzPrkod76waD/ozIuG/QEISkjA9EpKQhOn1mnB8EQlvekz42qaOd1Yvr6L4PNmAx7ZOHe9XEUWb22/7TdakDhdPHe7sP+HiEq7CWMpXG/D7Ei7CWLqNDbgKqT9VRMWLDfh0EScYkTTbtQm4CxcxRuOoi5kJuJ4LjdEsn9rv6JfSlAkPNuBBacq07zbgq9KUqRZDE3CWK02ZemQC3myVpkx3NAGHz0XqTxVRvrcX4WeX+lNF1C1twJXSlCmebcBrpYDN3B4PjCqlMdrZW8L1m9Itobes3Uota/c24KFM/aki8pa1qdSUWdhbwrtCacoE52TtQ2lZK6/td1RqWStXNqDWsvZpA+6V7nndZU3p4KnJ7LI2Vl/WtM7vc+f8/l19WXuQWtYebUCtZW3unN93SlOm2pmAa6llrXuy39EXpWUtdx7Vb6SWNfXze29Zu1MK2HzYW8JxLTRGsyB/fu+VLZSmTHDKFg9KF2H7ZQNqlS2c8/tZIzRl6mAfg67nUreE6sta6SxrWmWLbxtwqnTPW73ZgEelk7XaaUlrlS1yu6wNtB6DOmWLpdKy5jVjT0q7jNuMVfp/wmvGjqUeg7a2GTuUOlkLE/sd1SpbOM3Ye6WLUP783lvWZkoB663XjBUao1lwyhZSt4T6zVinbKHVjHWWNa1m7NZpxmZCU6bunGVNq2yh3owtvbKF0kXY3tqAWsua9xrTZbxzHkddOMua1C1hrt6MzZ1m7JX6sraXmjJO2eKoVelymrFSj0Hlm7HBWdakftkiHGzAk9TJmvovW1Rzu6zttN45d5qxUr9sUTpli0epZc1rxipNmc4pW4g1Y+2U0WrGZs7LkkplC/ed80WI8yNuZ+nXPq8ZO430M3xnm9vUEQunbBFV8mKD90JvVBMSkpCEJCQhCUlIQhL+vfA06PHPzAyHg0nyBzuh1z8VlOfJAwIAAAAAAAAAAAAAAAAAAAAA8Gd+ACJFOpwZV7PbAAAAAElFTkSuQmCC"
    },
    {
      title: 'Snort',
      description: 'Snort es un sistema de prevención de intrusiones de red de código abierto y libre, capaz de realizar análisis de tráfico en tiempo real y registro de paquetes en redes IP.',
      image: "data:image/png;base64,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"
    },
    {
      title: 'PTRG Network Monitor',
      description: 'Es una herramienta de monitoreo de red que permite monitorear el estado de los dispositivos de red y servicios de red como HTTP, HTTPS, FTP y otros. También permite monitorear el estado de los servidores de Windows, Linux, Unix y Mac OS X.',
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/PRTG_Logo.svg/1280px-PRTG_Logo.svg.png"
    },
    {
      title: 'Proxmox',
      description: 'Es una plataforma de virtualización de código abierto para ejecutar aplicaciones virtuales y contenedores. Proxmox es una solución de virtualización de servidor de código abierto que tiene la capacidad de administrar máquinas virtuales y contenedores de Linux a través de la interfaz web.',
      image: "https://camo.githubusercontent.com/2df2ac41e1b8a1484be236c75e395981b31bfd670eff46b5c182ea0be9475310/68747470733a2f2f7777772e70726f786d6f782e636f6d2f696d616765732f70726f786d6f782f50726f786d6f785f73796d626f6c5f7374616e646172645f6865782e706e67"
    },
    {
      title: 'Docker',
      description: 'Es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos.',
      image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
    },
  ]

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
                  Definir e implementar las políticas de para la gestión informática que dan las pautas y rigen para la gestión, el uso adecuado y la seguridad de la información de los sistemas informáticos y en general, sobre el ambiente tecnológico de la startup &quot;Little Paw&quot;, para su interiorización, aplicación y verificación permanente.
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

