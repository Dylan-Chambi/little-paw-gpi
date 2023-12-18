import img_marketing from "../images/logo_marketing.jpg";

function Marketing() {

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
              El Departamento de Marketing de Little Paw es un equipo apasionado y
              dedicado que impulsa la visión de la empresa a través de estrategias
              innovadoras y creativas. Estamos comprometidos con el bienestar de
              las mascotas y su conexión con las familias, promoviendo la adopción
              responsable y ofreciendo soluciones integrales para satisfacer todas
              las necesidades de los dueños de mascotas.
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
              crear un mundo donde cada mascota tenga un hogar amoroso y donde los
              dueños de mascotas encuentren todo lo que necesitan para el
              bienestar de sus compañeros peludos en un solo lugar. Queremos ser
              reconocidos por nuestro impacto positivo en la comunidad de amantes
              de los animales y por ser pioneros en soluciones innovadoras que
              mejoren la vida de las mascotas y sus familias.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Marketing;
