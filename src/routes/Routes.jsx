import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorElement from "../pages/ErrorElement";
import Home from "../components/home/Home";
import AboutMe from "../components/about/AboutMe";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutMe />,
            },
            {
                path: "/skills",
                element: <Skills />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },
    
]);
