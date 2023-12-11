import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ModernSignInPage = lazy(() => import('./ModernSignInPage'));

/**
 * The sign in pages config.
 */
const signInConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/authentication/sign-in',
			element: <ModernSignInPage />
		}
	]
};

export default signInConfig;
