import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { InfTechPage } from "../pages/InfTech";
import Marketing from "../pages/Marketing";
import {SoftwarePage} from "../pages/software/page.jsx";
import {CIOPage} from "../pages/cio_tech/page.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <h1>Home</h1> },
        { path: "/quienes-somos", element: <h1>¿Quiénes somos?</h1> },
        { path: "/cio", element: <CIOPage/>},
        { path: "/gerencia", element: <h1>Gerencia</h1> },
        { path: "/software", element: <SoftwarePage/> },
        { path: "/marketing", element: <Marketing /> },
        { path: "/seguridad", element: <h1>Seguridad</h1> },
        { path: "/it", element: <InfTechPage /> },
        { path: "/contacto", element: <h1>Contacto</h1> },
      ],
    },
  ]);

  export default router;