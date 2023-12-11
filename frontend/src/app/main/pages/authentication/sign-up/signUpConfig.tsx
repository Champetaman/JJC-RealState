import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ModernSignUpPage = lazy(() => import('./ModernSignUpPage'));

/**
 * The sign up pages config.
 */
const signUpConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'pages/authentication/sign-up',
			element: <ModernSignUpPage />
		}
	]
};

export default signUpConfig;
