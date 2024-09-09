/** @import {User} from "./user.d" */

/**
 * @typedef {object} UserState
 * @property {User} user - The user.
 */

/**
 * @typedef {object} SetUserAction
 * @property {string} type - Action type.
 * @property {object} payload - The action payload.
 * @property {User} payload.user - The user.
 */

export default {};
