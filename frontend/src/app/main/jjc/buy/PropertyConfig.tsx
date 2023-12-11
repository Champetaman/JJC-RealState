import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import es from './i18n/es';

i18next.addResourceBundle('en', 'propertyPage', en);
i18next.addResourceBundle('es', 'propertyPage', es);

const Property = lazy(() => import('./Property'));

/**
 * The Property page config.
 */
const PropertyConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/buy',
			element: <Property />
		}
	]
};

export default PropertyConfig;
