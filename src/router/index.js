import {createWebHistory, createRouter} from "vue-router";
const history = createWebHistory();
import Home from '../../Views/Home';
import Contact from '../../Views/Contact';
const routes = [
    {path : "/", component: Home },
    {path : "/contact", component: Contact }
];
const router = createRouter({
    history,
    routes
    }

);

export default router;
