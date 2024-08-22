/** @import { Logo } from "../docs" */

import { Logos } from "../ui";

/**
 * Get a logo by its ID.
 *
 * @function
 * @param {string} logoId - The logo ID.
 * @throws {Error} If the logo with the ID is not found.
 * @returns {Logo} The logo corresponding to the ID.
 */
export const getLogoById = (logoId) => {
  const logo = Object.values(Logos).find((logo) => logo?.id === logoId);

  if (!logo) {
    throw new Error(`Logo with ID ${logoId} not found.`);
  }

  return logo;
};

/**
 * Get a logo ID by its name.
 *
 * @function
 * @param {string} logoName - The logo name.
 * @throws {Error} If the logo with the name is not found.
 * @returns {string} The logo ID corresponding to the name.
 */
export const getLogoIdByName = (logoName) => {
  const logo = Object.values(Logos).find((logo) => logo?.name === logoName);

  if (!logo) {
    throw new Error(`Logo named ${logoName} not found.`);
  }

  return logo?.id;
};
