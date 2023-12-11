import i18next from 'i18next';
import { FuseNavigationType } from '@fuse/core/FuseNavigation/types/FuseNavigationType';
import en from './navigation-i18n/en';
import es from './navigation-i18n/es';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('es', 'navigation', es);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavigationType = [
	{
		id: 'property-component',
		title: 'Buy',
		translate: 'BUY',
		type: 'group',
		url: 'buy'
	},
	{
		id: 'example-component',
		title: 'Example',
		translate: 'EXAMPLE',
		type: 'group',
		url: 'example'
	},
	{
		id: 'help-center.home',
		title: 'Help',
		type: 'group',
		url: '/help-center',
		children: [
			{
				id: 'help-center.faqs',
				title: 'FAQs',
				type: 'item',
				url: '/help-center/faqs'
			},
			{
				id: 'help-center.guides',
				title: 'Guides',
				type: 'item',
				url: '/help-center/guides'
			},
			{
				id: 'help-center.support',
				title: 'Support',
				type: 'item',
				url: '/help-center/support'
			}
		]
	},
	{
		id: 'authentication.sign-in',
		title: 'Sign In',
		translate: 'SIGNIN',
		type: 'group',
		url: '/authentication/sign-in'
	}
];

export default navigationConfig;
