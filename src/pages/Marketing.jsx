import img_marketing from "../images/logo_marketing.jpg";
import { Button, Card, Grid, Typography, Box
 } from "@mui/material";
import manual from "../assets/manual_marketing.pdf";
import actividades from "../assets/actividades_marketing.pdf";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import DocumentViewPopup from "../components/DocumentViewPopup";
import * as workflowMark from '../images/workflow_marketing.png';
import workflowMKT from '../assets/workflow_marketing.pdf';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

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
  const toolsCards = [
    {
      title: 'Google Analytics',
      description: 'Google Analytics es una herramienta de análisis web de Google que proporciona datos detallados sobre cómo los usuarios interactúan con un sitio web. Ayuda a los propietarios de sitios y profesionales del marketing a comprender el tráfico, el comportamiento del usuario y las conversiones, permitiéndoles optimizar el rendimiento del sitio y las estrategias de marketing.',
      image: "data:image/png;base64,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"
    },
    {
      title: 'Brevo',
      description: 'Brevo es la plataforma integral para crear relaciones con clientes a través de email, SMS, chat y mucho más.',
      image: "https://play-lh.googleusercontent.com/NIdaYvkgQaWkbtrjIgzX_7q9ihRVfFKK-4vy11umGRishb51xeJRyP2bSnEHXksaCw"
    },
    {
      title: 'HubSpot',
      description: 'HubSpot es una plataforma de cliente con todas las integraciones y los recursos que necesitas para conectar tus equipos de marketing, ventas, gestión de contenido y servicio al cliente.',
      image: "https://images.ctfassets.net/crb83veve8xb/2el8HFvMGSPNFHE8fwuRJd/451ce4d1b5bbda384044bc234fddcb52/Disen__o_sin_ti__tulo__12_.png"
    },
    {
      title: 'Canva',
      description: 'Canva es una herramienta de diseño en línea, en la que puedes crear contenido de comunicaciones: afiches, imágenes para redes sociales, infografías, presentaciones y hasta videos.',
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREYFxURFRUYHiggGBolGxMVIzEiJSorLi4uFys/OD8sNygtLisBCgoKDg0OFQ8QFyslICEvLSstKy0tLS0rKy0rLSsrMisrLS0tLS8rKysrKystLSsrLS0tKystLS0rLSsrKystK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIFBgcEA//EAD8QAAICAQEFBgMFBAgHAAAAAAABAhEDBAUGEiExE0FRYXGRB4GhFCIjMkKSscHRM1JicoKiwuEkNFN0stLx/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAxEQACAQMCAwYFBAMBAAAAAAAAAQIDERIEITFBUQUTYXGR8BSBobHBItHh8TJSYkL/2gAMAwEAAhEDEQA/APSMQHvH5iAAAAAAAAAAAAAAAAAAAAAhgAxDAAGAgAY7iAYhloQhiKRoiRMbExmsSWSymSy0bxJYmUyGUdMBAMC7Gx7wADiPmgAAAAAAAAGAAACGAAIBgACAAAAEMAGIAEMpDJYwGWhEsoRSNESyWNgyjaKJYmDEykdEUSyWNkstHTBAAgLNrGRAQzhPmQAAAQAAAADEAAMBAADEAAAAAgGAwAYxAIAKQEsoQy0Ikollm0UIllMhjNooTJZTIZojoghMljZLKSOuERgSIs2xMmAxHAfKDAQAAwAAAAAAEAAADABAAAMQxjEIAApIYgEMtAICSjSKAljZLGjWKBiYMTLN4xJZLG2SyzqjETJY2SzRI6oRACRlGtjKAAHnnyIAAAAAAAAAC58lbfgkHv7BZiuuoAAAMAAQDsMQxDGkAE2Kx2LUShCsVjLUQEwsTYzWMRshjJbKNoxG2Q2DZLZZ0RiDZDG2S2aI6oRBkMbZLLR1QiACsBmuJlxAI88+OGMReDFPJOOOEXKc5KMYrvbEFm9kejZ+hy6nIseKDbf7KXi33I3nZm6ul00e0zcOXJFcUpy+5jj48vDzf0MlsPZOPR4ljhTm6eSffJ/yV9DTt7tvPUZHgxS/4eDqTT/pZeL8l3e/pwOpOvLGDsup9JDSUOzqKrV0pTfBcr+Hlzly5eOa1e+Olwfc0+J5VHly/Bx/Ll/A9OzNr6XaaljnhXGo8TxzqX3elqXzXh1OcGw7iQlLWprpDHNy8KapfVr2Kq6WnCDkuK5mek7X1NbUQpztjJ2xtt+/15Hy3q2ItHljLG28OS3G+bjJdU339VX+xgjeviHqIxw4cf6pzk148KVP6tGh2b6aTlTTZ5/amnp0tTKFPhs7dG1e358L2KAmxWdFjhxKFZNhZVi0h2KxWKxpFqI7FYmwsaRoohYmws9Oztn59Vk7PT43OSVy6RjFeMm+SG9ldm0INtJLc81kNmU2vsDVaOMZ5oLgk641JTipeD8DFNhGUZK8XdHQ6UoPGSs/EGyGxtktmqRtGImyWxtktlpHTGImyWwbJbLR0wiUBFgVZm2JmChAeafFWGbZ8P8AQKWSepkuWKo4n5tc/ZfvNSOk7jY0tn45d+SWST+UnH+By6yTjSduex6fY1FT1Sb/APKcvSyXpe/nY+u920Hp9HNxdZMj7OD8P6z9k/c5ibf8Rsr7XSw7lGUq85SS/wBJp1j0cMaSfX+iu2arqapx5RSX0Tf3XoOzZN2tv6fRYsvFjlPNOnceGMWkuUW27XO+59TWrCzepSjOOMuBxaetOhPvIWv478fye3a+08uryvLkrnyjFfliu6KZlNh7q5tVFZZyWHE+cXKKm5LxjHw82fLdDZC1eovIrxYUp5F3Tcvyx+dN+iN63j2qtFpZZFXG6hii+nE+/wBEk38jlr1nBxpUlv8Ab39D1dFoo1oz1Wpd1u/O3Fvw5WXS3C19V2zua8GKWXDleTgi5TjwcMpJdWmuvoGzdyMuXGp5szwSkrjBQ45RXdfNU/I82520c89oQ48s8nbRyKfE3TqDknXTqjfdrarsNNnzd+PHJx85191e9GdarXpNU8rt87ddrep16XSaOunXwaSusb7bc9n05cEch1WLssssbabi3FtdHTatextGi3Jnl08Mv2iMZ5IRnCHA3FKStJyvz8Pc1FKUmkucpSSXi5P/AHO1abEsWLHDuxY4xvyjGv4G+sqzpKOL3f4OXsrSUtRKo5x2Vrbva9+luCONYNPlyZFhxwlLLKTiorrxLqrNw0+4TeO8up4cjXSOPjjHyttX9D74Xj2Tp56vNHi1erlKUcb5Sim74fJK05PxpeBsewNZPUaTDmyqKnki5NRTUfzOqT8qM9Rqalrw2je1+r528Edej7Pop41d5WvbfZcr2tu7/Ll1fJto6SemzZMGSuPHLhddHytNeTTT+Zkd3N38mvlNqfZYcdKc64m5P9MV40PffIpbS1Ffp7KL9VjjZufw/hWzoSqu0yZZev3uH/SdFevKGnU1xdvqr/uc+m0lOeqlTf8AjHL6O2/qaVvRsWOz8uPHHK8iyY+P70VFx513ehtu7EFpdjz1EEu1lj1Gduuso8Sin5JRX1MH8TH/AMZh/wC3j/5zMpuLtLFn0s9Bka44rLFRbp5MM7brzVv5UZVsp6WEpb8G/L3Y7KEIU9XUjHbay89n+43qsmfd+eXUy7SUoyuckk21nqL5eiOe44SnKMIRcpSajGMVcpSfRJHSN5Nl6hbO0+z9Jjnm5wjkmnGC4Yc7dvlcqfyL3R3W+xfj53Gepaaio844YvrT75PvfyXe26epp0qc59ZNqP8AHIuppp1Jwh/rFJv+eZhtm7gZZwUtTmWGTV9ljisko+srq/S/Ux22tzdTp8uHHhfbx1E+zhJR4HGdN1PrSpN35P5574gbwTwcOkwTcMk48eacXUowfSCa6N0/l6lfDPVZMmDUwnKU448sHDiblw8UeaV93K/mEa2oVL4iTVuluT2v74mvcUc+6it+phtrbjy0ukyamWpjKeKKlKCxtQfNKlK/Pw5mnNnTfibruz0mLAnzz5ba8cePm/8AM4HMGzt0E6lSlnN8Xt5f3cVWnGMrRQMlsbZDZ3pFwiOwIsZVjbEzJRNhZ5p8NYfEdO3Imns7Av6rzRfr2kn/ABOYWbx8OtenDLpn+aMu2ivGL5S9ml7nHrot0r9Gmer2NJQ1NnzTX2f4Z5fiPFrPp5d0sMor1Um3+9Go2dH362bLPplkxxcsmncpJJc+B/mr2Xsc1svRyypJdNhdq0XHVSk+ErNelvx9irE2TZtG6Wwu1f2zU1DS4rnHj6ZXHnfP9Crr316nRUnGnFyl78DloaadaahDj9l1fh74m2bobNel0ceNVlyvtcifWN/lj8lXzbNZ+I+pctRgxfpxwcq/tSf8kvc27YG1o63FLLFUlmnCK7+FVwt+bTTNT362Rqcmrx5MOGWWOSMFcIOXDOLaqVdOTXN8jzNO38S3U2e/r09D6LWQXwShRV4/ptz297ny+HOmc9Vlzfpw46/xydL6cRnfiHqOHRdmuuXLGL/uq5fvUT17q6DHpMX2Zyi9TUc2eKduPHaivRVX/wBMV8Q9JnzfY1hxTyriypqEXOpPh4brp0fNhmqurjK+y4fJX+vEFRlR0EoW3ad/OTtba/C9vka5uZoXn12Jtfcw/jZPC49F+1Xszqsmkm3SSTbb6JGvbpbLhosbwzlF6vJGOXNGLvghbUI+i5+rsnfzaH2fQyjF1PPJYY+Ki1cn7Jr/ABE6iXxFdRj5L9/I20lNaXTuU+PF+nD3zNC3l2vLW6nJkVuEXw4I8/uxXTl4vr8/I6zotOsOHFj7sWOEP2YpX9Di2gklmwuX5Vlg5X04VJX9LO2arG548kIupShKKfg2qTNu0oqEacFw/pe/Mx7LvJ1akuLt+X78ji+u1EtVqcmSKcpZsspRiur4pcor3SOu7E08MGDHpYyUpaeEI5a/6jXE3822/madsPYC2apa/aDinhj+FijJS/Eqk76OXcl8/T6bg7Yln1esWV/f1CWdLuTi6cV6RlFLyiaay1aEu7/xhz6vZfOy59RaOPdSTqL9U/ouPyu/3PJ8To1qtPLxwV7Tf/seTcTZizal6rLSwaT8Rylyj2lXHn5L7z8KXibVvtu9m1/2Z4HBSxynCbm6Sxyp8XnTj08zWt6No4tJp47K0crUP+ayrrPJ3wtd99fCkvFFUKneUIUYP9T2f/K5v0exdSjjWlVkttmvF24eqPDtrezV5s2aWHPkxYJNrFjhLgaglSdrmm+vzOqaDTrDhxYk77OEIW+bbS5tnCWzvOlzxy48eWLuOSEZxfipK1+8jtOnGnCnGKst/sv5NdG3KU3J3e35OK7f1j1Gs1OZu+PNPh/uRfDH/LFHQ/hvpOz0HaNc8+ac1/cjUF9Yt/M02O6esya2en7HJCCyyvUSg+xWLi5TUuknXcud+HOupbKeHsMcdPKMsGNPDjcXarG3Bq+/nF8y+0KsFRjTg73t6W29fwPTU3m5S8TnHxN1fHroYr5YcEVXhObcn9OD2NTy4ZwUHOEorJHjg5RaU4W1xLxXJm27c2HqddtrPjjCcYSlicszi+zhh7OK4r6N8nS72vWvHv8A6zFPVY9NgrstFhjp1XNKa/NFeiUV6pnbpZxUaVKO/wCm78Nr/VvgW4Xbk+prDZDY2yWz0EjaEB2BNiKsbYGcsVk2KzzbHweJdn20OtyafLDNilwzxu14PxTXemuR5rFY8b7MqKad1yOsbD3j0+silGSxZq+9hm0pJ+T/AFL0+h8do7naLPJz4Z4ZN2+yklFvx4Wml8qOWNnqhtPUQVQ1GaK8I5JxXsmcPwDhJypTa9++J7K7RjUgo16alb3w5fJm/wAd2tl6BdtqJuSjzTzzTjfgoRS4vSma3vRvRLVrsMCeLTRa8pZa6Wu5eC9/Ba1lyym+KcpTl/WlJuXuyGzelpLSU6knJrrwXkvfqYVdVlB06UFCL424vzfvztsZbYO3M2gyOeOpwmkp45WozS6O+5q3z8zYdX8Qsjg1h00cc2vzzyPIo+kUlfuaPYrNZ6SlUllKO4qWorU44QlZfLbyunYy2ztu6nT6l6pT48k2+17Tpki+qfsqrw+RsOq+IeVwrFpYQyNfnnleSMX4qKSv3NHsVlVNJSqNOUb298rFUq9amnGMmk/J/e5m9kbxZ9Nq56uX48sqccqnKu0i66PuapVy6cit594p7QnjbxrFDEpKMFNzbcqtt0vBGCsVl/D081Ux3W3vlwGp1MO7vs9/z58SmzcNmb/5cOKOPNgjnlCKjHJ2rxykl04uTt+Zplisqrp6dVWmr+/AujKdNtwdjL7e2/qNdNSytRhD+jwwvgh5+b8/3Hh2frsmmzY8+J1kxS4o3zT5U0/JptfM8tisuNKKjglt0NLSlLJvfqbjtbf7U5sXZ4MUdM5Kp5FN5MnmoOlw+vN+hqFk2KxUqEKSxhGxtJym7ydyrNm3d30z6LGsE8a1GKN8Cc3CeO+5Sp2vKv5GrWFjq0YVY4zV0aU7xd0zbdub96nVY5YsMFpcclU5Rm55ZLwUqXCvRX5nj3Y3tzbPUsfBHNgk+LglJwcJd7jKnSfhXtzvXGyWyFo6Kpungre9zpi5N3bNy2x8QdTng8enxx0yaalNTc8tf2XSUfWm/CjTWxNktm1HT06StCNvfXj6s3im+INktg2S2dCR0xgOwFYDNcTM2KxWTZ5+J8HgfSybJsVlYlKBVismxWPEtQKsVk2TZeJooFtisiwsrE0VMqxWTZNjxLUC7CybJsrE0VM+lk2RYWPE0jTKsVk2FhiaqBVismwsLGigVYmybE2GJtGBTYmyWyWysTojTG2S2JslsrE6oQG2KwsVl2OiMR2ArAZWJlrFZFhZw4nw/dl2TZNhZWJapjsVktktl4mipltisiybHiWqZdisiwsrE1VMuxWTYrKxLVMqwsiwseJooWKsVisVhYpRLsLJsVhY0UCrCyLCxYmkYFWS2DZDY8TeNMpslslsTZWJ1QgNsVisB2N4xHYEgBYAAAMydk2RYmzDE+Q7styJbFYmy8S1TG2JshyE2Uomipl8RNkWFlYmipl2FnzsVlYmipl2FnzsdjxKwKsdk2KxWKwKsdk2KwsWoFWFk2KwxNIwKsLIsTYrG0aZTYmyWxWVY3jTKbJsAA2SKEAxDAQxEjAAAAPXZNkWLiDE+d7suyWyWxWWomiplNishsVlqJapl2FnzsVjxNFA+lisiwsdisS7CybCwxHgXYrIsLFiUoF2KybFYWNI0y7CyLAVjVQKsViALGqSGAAIooQxCGMYhkgAhiJGAAAAVYuIixWdGJ5iplcQrIbCy8SlTKbFYrFY8S8CrCyLCx2HifSxWTYrCxWBdiskYrFKKHY7EIRVirEAxMoAAESMYACEMYABIyhDEIYxiGSACGIkYAAAB8hMAOw4wYABZQgABDATABjGIAEUUgEAMRSEAEjKBABLGAwAkYAgAQxgAEjKEACGUAgJYDEAEjGAAAH/2Q=="
    },
    {
      title: 'SEMrush',
      description: ' Semrush es una herramienta que administra la presencia digital y el Marketing de Contenido de las empresas. Las principales funciones de la herramienta son optimizar la visibilidad de las organizaciones en los diferentes canales en línea y ayudarlas a crear contenido para sus respectivas audiencias.',
      image: "data:image/png;base64,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"
    },
    {
      title: 'Buzzumo',
      description: 'Buzzsumo es un software que le permite a los profesionales de marketing hacer búsquedas sobre los asuntos más consumidos y compartidos en internet.',
      image: "https://s14415.pcdn.co/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=uploads/2022/06/buzzsumo-partner.jpg&width=807"
    },
  ]

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
    </div>
  );
}

export default Marketing;
