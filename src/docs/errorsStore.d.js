/**
 * @typedef {object} ErrorsState
 * @property {string} errors - The errors registry.
 */

/**
 * @typedef {object} AddErrorAction
 * @property {string} type - Action type.
 * @property {object} payload - The action payload.
 * @property {string} payload.id - The error ID.
 * @property {string} payload.message - The error message.
 */

/**
 * @typedef {object} ClearErrorAction
 * @property {string} type - Action type.
 * @property {object} payload - The error ID.
 * @property {string} payload.id - The error ID.
 */

export default {};
