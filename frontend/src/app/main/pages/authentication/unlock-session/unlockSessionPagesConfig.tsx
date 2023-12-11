import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const ModernUnlockSessionPage = lazy(() => import('./ModernUnlockSessionPage'));

/**
 * The unlock session pages config.
 */
const unlockSessionPagesConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'authentication/unlock-session',
			element: <ModernUnlockSessionPage />
		}
	]
};

export default unlockSessionPagesConfig;
