import AboutMe from "../components/pages/About/AboutMe"
import Contact from "../components/pages/Contact/Contact"
import HomeSection from "../components/pages/Home/HomeSection"
import Works from "../components/pages/Works/Works"

export const routes = [
    {
        id: "home",
        path:"/",
        Element: HomeSection
    },
    {
        id:"about",
        path: "/about",
        Element: AboutMe
    },
    {
        id: "contact",
        path:"/contact",
        Element: Contact
    },
    {
        id: "works",
        path: "/works",
        Element: Works
    }
]