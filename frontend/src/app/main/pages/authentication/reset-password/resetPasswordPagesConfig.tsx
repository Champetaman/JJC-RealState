import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ModernResetPasswordPage = lazy(() => import('./ModernResetPasswordPage'));

/**
 * The reset password pages config.
 */
const resetPasswordPagesConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'authentication/reset-password',
			element: <ModernResetPasswordPage />
		}
	]
};

export default resetPasswordPagesConfig;
