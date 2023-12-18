import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { InfTechPage } from "../pages/InfTech";
import Marketing from "../pages/Marketing";
import {SoftwarePage} from "../pages/Software.jsx";
import {CIOPage} from "../pages/CIO.jsx";
import {Home} from "../pages/Home.jsx";
import {Seguridad} from "../pages/Seguridad.jsx";
import {Contacto} from "../pages/Contacto.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element:  <Home/>},
        { path: "/cio", element: <CIOPage/>},
        { path: "/gerencia", element: <h1>Gerencia</h1> },
        { path: "/software", element: <SoftwarePage/> },
        { path: "/marketing", element: <Marketing /> },
        { path: "/seguridad", element: <Seguridad /> },
        { path: "/it", element: <InfTechPage /> },
        { path: "/contacto", element: <Contacto /> },
      ],
    },
  ]);

  export default router;