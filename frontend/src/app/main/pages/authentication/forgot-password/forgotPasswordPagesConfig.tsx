import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ModernForgotPasswordPage = lazy(() => import('./ModernForgotPasswordPage'));

/**
 * Route Configuration for Forgot Password Pages.
 */
const forgotPasswordPagesConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'authentication/forgot-password',
			element: <ModernForgotPasswordPage />
		}
	]
};

export default forgotPasswordPagesConfig;
