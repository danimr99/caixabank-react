/** @import { Asset } from "../docs" */

import { Assets } from "../ui";

/**
 * Get an asset by its ID.
 *
 * @function
 * @param {string} assetId - The asset ID.
 * @throws {Error} If the asset with the ID is not found.
 * @returns {Asset} The asset corresponding to the ID.
 */
export const getAssetById = (assetId) => {
  const asset = Object.values(Assets).find((asset) => asset?.id === assetId);

  if (!asset) {
    throw new Error(`Asset with ID ${assetId} not found.`);
  }

  return asset;
};

/**
 * Get an asset ID by its name.
 *
 * @function
 * @param {string} assetName - The asset name.
 * @throws {Error} If the asset with the name is not found.
 * @returns {string} The asset ID corresponding to the name.
 */
export const getAssetIdByName = (assetName) => {
  const asset = Object.values(Assets).find(
    (asset) => asset?.name === assetName
  );

  if (!asset) {
    throw new Error(`Asset named ${assetName} not found.`);
  }

  return asset?.id;
};
