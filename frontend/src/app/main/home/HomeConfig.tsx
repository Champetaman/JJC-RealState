import i18next from 'i18next';
import { lazy } from 'react';
import en from './i18n/en';
import tr from './i18n/es';

i18next.addResourceBundle('en', 'homePage', en);
i18next.addResourceBundle('tr', 'homePage', tr);

const Home = lazy(() => import('./Home'));

/**
 * The Home page config.
 */
const HomeConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'home',
			element: <Home />
		}
	]
};

export default HomeConfig;
