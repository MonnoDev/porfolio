import PortfolioLayout from "../layout/PortfolioLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Main from "../pages/Main/Main";
import Projects from "../pages/Projects/Projects";

export const ABOUT_ROUTE = "/aboutme";
export const MAIN_ROUTE = "/";
export const CONTACT_ROUTE = "/contactme";
export const PROJECTS_ROUTE = "/projects";
export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/kamil%C4%97-t-b64a80213/";
export const GITHUB_LINK = "https://github.com/sliure";

export const porfolioRoutes = {
  Layout: PortfolioLayout,
  routes: [
    {
      path: MAIN_ROUTE,
      Component: Main,
    },
    {
      path: CONTACT_ROUTE,
      Component: Contact,
    },
    {
      path: ABOUT_ROUTE,
      Component: About,
    },
    {
      path: PROJECTS_ROUTE,
      Component: Projects,
    },
  ],
};

export const mainPageRoutes = [
  { route: ABOUT_ROUTE, title: "About" },
  { route: PROJECTS_ROUTE, title: "Projects" },
  { route: CONTACT_ROUTE, title: "Contact" },
];

export const socials = [
  { route: LINKEDIN_LINK, title: "LI" },
  { route: GITHUB_LINK, title: "GIT" },
];
