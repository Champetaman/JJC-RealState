import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ModernComingSoonPage = lazy(() => import('./ModernComingSoonPage'));

/**
 * The coming soon pages config.
 */
const comingSoonPagesConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'pages/coming-soon',
			children: [
				{
					path: '',
					element: <Navigate to="modern" />
				},
				{
					path: 'modern',
					element: <ModernComingSoonPage />
				}
			]
		}
	]
};

export default comingSoonPagesConfig;
