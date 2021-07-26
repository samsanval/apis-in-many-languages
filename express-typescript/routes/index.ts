import { Router } from 'express';
import glob from 'glob';

export function registerRoutes(router: Router) {
    const routes = glob.sync('./routes');
    console.log(routes);
    routes.map((route: string) => register(route, router));
}

function register(routePath: string, router: Router) {
    const route = require(routePath);
    route.register(router);
}
