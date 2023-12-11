import { lazy } from 'react';
import { FuseRouteConfigType } from '@fuse/utils/FuseUtils';

const Error404Page = lazy(() => import('./Error404Page'));
const Error500Page = lazy(() => import('./Error500Page'));

/**
 * The error pages config.
 */
const errorPagesConfig: FuseRouteConfigType = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '404',
			element: <Error404Page />
		},
		{
			path: '500',
			element: <Error500Page />
		}
	]
};

export default errorPagesConfig;
