import img_marketing from '../images/logo_marketing.jpg';

function Marketing() {
  const containerStyle = {
    backgroundImage: `url(${img_marketing})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '400px', // Establece una altura mínima o ajusta según tus necesidades
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '6rem',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 3.5, 3.5)', // Añade sombra al texto
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Departamento de Marketing</h1>
    </div>
  );
}

export default Marketing;
