import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';


const ModernConfirmationRequiredPage = lazy(() => import('./ModernConfirmationRequiredPage'));

/**
 * Route Configuration for Confirmation Required Pages.
 */
const confirmationRequiredPagesConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'authentication/confirmation-required',
			element: <ModernConfirmationRequiredPage />
		}
	]
};

export default confirmationRequiredPagesConfig;
