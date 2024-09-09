/** @import {AuthenticationStatus} from "./authentication.d" */

/**
 * @typedef {object} AuthenticationState
 * @property {AuthenticationStatus} authenticationStatus - The authentication status.
 */

/**
 * @typedef {object} SetAuthenticationStatusAction
 * @property {string} type - Action type.
 * @property {object} payload - Action payload.
 * @property {AuthenticationStatus} payload.authenticationStatus - The authentication status.
 */

export default {};
