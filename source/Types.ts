import * as login from './Components/Login/Types';

/**
 *
 *
 * @export
 * @interface IApplicationState
 */
export interface IApplicationState {
    login?: login.ILoginState;
}

/**
 *
 *
 * @export
 * @interface IProps
 * @extends {IApplicationState}
 */
export interface IProps extends IApplicationState {
    dispatch?: any;
    FacebookLogin?: login.FacebookLogin;
}