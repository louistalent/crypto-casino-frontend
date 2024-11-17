import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// layouts
import SportsLayouts from 'src/layouts/sports';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const Sports = lazy(() => import('src/pages/sports'));
const SportsLive = lazy(() => import('src/pages/sports-live'));

// ----------------------------------------------------------------------

export const sportsRoutes = [
    {
        path: 'sports',
        element: (
            <SportsLayouts>
                <Suspense fallback={<LoadingScreen />}>
                    <Outlet />
                </Suspense>
            </SportsLayouts>
        ),
        children: [
            {
                index: true,
                element: <Sports />
            },
            {
                path: 'live-sports',
                element: <SportsLive />
            }
        ]
    }
];
