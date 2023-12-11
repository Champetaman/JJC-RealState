import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import { FuseRouteConfigsType, FuseRoutesType } from '@fuse/utils/FuseUtils';
import ExampleConfig from '../main/example/ExampleConfig';
import HomeConfig from '../main/jjc/home/HomeConfig';
import BuyConfig from '../main/jjc/buy/PropertyConfig';
import pagesConfigs from '../main/pages/pagesConfigs';

const routeConfigs: FuseRouteConfigsType = [BuyConfig, ExampleConfig, HomeConfig, ...pagesConfigs];

/**
 * The routes of the application.
 */
// TODO Ajustar rutas de JJC
const routes: FuseRoutesType = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
	{
		path: '/',
		element: <Navigate to="/example" />,
		auth: settingsConfig.defaultAuth
	},
	{
		path: 'home',
		element: <Navigate to="/home" />,
		auth: settingsConfig.defaultAuth
	},
	{
		path: 'buy',
		element: <Navigate to="/buy" />,
		auth: settingsConfig.defaultAuth
	},
	{
		path: 'loading',
		element: <FuseLoading />
	},
	{
		path: '*',
		element: <Navigate to="404" />
	}
];

export default routes;
