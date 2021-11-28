import Router from './router.js'

// instance of Router
const router = new Router();

// register routes with Router
const configureRoutes = () => {
    router.addRoute("/about", "<h3>About me</h3>");
    router.addRoute("/home", "<h3>Custom client router</h3>");
    router.addRoute("/contact", "<h3>me@example.com</h3>");
    router.setDefault("/home");
};

configureRoutes();

// Tell router to resolve current route on app load. Will route to default route in case of invalid one.
router.resolveRoute();

// attach routes to buttons
const element = (id) => document.getElementById(id);
const registerClickHandler = (id, route) =>
element(id).addEventListener("click", () => router.goTo(route));

const addEventListeners = () => {
    registerClickHandler("about", "/about");
    registerClickHandler("home", "/home");
    registerClickHandler("contact", "/contact");
};

window.addEventListener("load", addEventListeners);