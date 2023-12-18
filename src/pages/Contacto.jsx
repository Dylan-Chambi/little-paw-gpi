import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img_contacto from '../images/logo_contacto.jpg';
import joseph from '../images/img_joseph.png';
import marcos from '../images/img_marcos.png';
import dylan from '../images/img_dylan.png';
import hugo from '../images/img_hugo.jpg';
import camila from '../images/img_camila.jpg';

export const Contacto = () => {
  const containerStyle = {
    backgroundImage: `url(${img_contacto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const titleStyleContainer = {
    color: 'white',
    fontSize: '6rem',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '0px 0px 10px rgba(0, 0, 0, 3.5)',
  };
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Permite que las tarjetas se envuelvan si no caben en una sola fila
    padding: '20px', // Espaciado entre tarjetas
  };
  const cardStyle = {
    width: 300, // Ancho de cada tarjeta
    margin: '10px', // Espaciado entre tarjetas
    backgroundColor: 'rgba(247, 215, 131, 0.8)',
    borderRadius: '16px',
  };
  const mediaStyle = {
    height: 500,
    width: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  };

  const personas = [
    {
      name: 'Joseph Meneses',
      role: 'Director del Departamento de Seguridad',
      competencies: ['Ciberseguridad', 'Seguridad de la Información', 'ISO 27001'],
      image: joseph,
    },
    {
      name: 'Marcos Simon',
      role: 'Director del Departamento de Software y CIO',
      competencies: ['Desarrollo de Software', 'Gestión de Proyectos'],
      image: marcos,
    },
    {
      name: 'Dylan Chambi',
      role: 'Director del Departamento de IT',
      competencies: ['Infraestructura', 'Redes', 'Soporte Técnico'],
      image: dylan,
    },
    {
      name: 'Hugo Apaza',
      role: 'Gerencia Administrativa',
      competencies: ['Administración', 'Finanzas', 'Contabilidad'],
      image: hugo,
    },
    {
      name: 'Camila Grandy',
      role: 'Directora del Departamento de Marketing',
      competencies: ['Marketing Digital', 'Publicidad', 'Diseño Gráfico'],
      image: camila,
    },
  ];

  return (
    <div>
      <div style={containerStyle}>
        <h1 style={titleStyleContainer}>CONTACTO</h1>
      </div>

      <div style={cardContainerStyle}>
        {personas.map((persona, index) => (
          <Card key={index} style={cardStyle}>
            <CardMedia
              component="img"
              alt={persona.name}
              style={mediaStyle}
              image={persona.image}
            />
            <CardContent style={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div">
                {persona.name}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {persona.role}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Competencias:
                <ul>
                  {persona.competencies.map((competency, index) => (
                    <li key={index}>{competency}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
