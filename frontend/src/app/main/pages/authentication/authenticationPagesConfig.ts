import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
import signInConfig from './sign-in/signInConfig';
import signUpConfig from './sign-up/signUpConfig';
import signOutConfig from './sign-out/signOutConfig';
import confirmationRequiredPagesConfig from './confirmation-required/confirmationRequiredPagesConfig';
import forgotPasswordPagesConfig from './forgot-password/forgotPasswordPagesConfig';
import resetPasswordPagesConfig from './reset-password/resetPasswordPagesConfig';
import unlockSessionPagesConfig from './unlock-session/unlockSessionPagesConfig';

/**
 * The authentication pages config.
 */
const authenticationPagesConfigs: FuseRouteConfigsType = [
	signInConfig,
	signUpConfig,
	signOutConfig,
	forgotPasswordPagesConfig,
	resetPasswordPagesConfig,
	confirmationRequiredPagesConfig,
	unlockSessionPagesConfig
];

export default authenticationPagesConfigs;
