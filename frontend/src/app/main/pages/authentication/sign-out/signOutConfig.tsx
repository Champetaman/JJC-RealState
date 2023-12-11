import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ModernSignOutPage = lazy(() => import('./ModernSignOutPage'));

/**
 * The sign out pages config.
 */
const signOutConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'pages/authentication/sign-out',
			element: <ModernSignOutPage />
		}
	]
};

export default signOutConfig;
