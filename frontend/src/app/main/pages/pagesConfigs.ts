import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
import maintenancePageConfig from './maintenance/maintenancePageConfig';
import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import comingSoonPagesConfig from './coming-soon/comingSoonPagesConfig';
import errorPagesConfig from './error/errorPagesConfig';
import HelpCenterAppConfig from './help-center/HelpCenterAppConfig';

/**
 * The pages routes config.
 */
const pagesConfigs: FuseRouteConfigsType = [
	...authenticationPagesConfig,
	comingSoonPagesConfig,
	errorPagesConfig,
	maintenancePageConfig,
	HelpCenterAppConfig
];

export default pagesConfigs;
