import { Navigate, useRoutes } from 'react-router-dom';
//
import { mainRoutes } from './main';
import { extraRoutes } from './extra';

import { authRoutes } from './auth';
import { sportsRoutes } from './sports';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        // Main routes
        ...mainRoutes,

        // Auth routes
        ...authRoutes,

        // Extra routes
        ...extraRoutes,

        // Extra routes
        ...sportsRoutes,

        // No match 404
        { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}
