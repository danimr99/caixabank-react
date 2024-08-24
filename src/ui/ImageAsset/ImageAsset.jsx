import { memo } from "react";
import PropTypes from "prop-types";

import { AssetsNames } from "./assets";
import { getAssetById } from "../../utils";

import "./ImageAsset.css";

export const ImageAsset = memo(function ImageAsset({ name }) {
  const asset = getAssetById(name);

  return (
    <div className="asset-container">
      <img {...asset?.size} src={asset?.src} alt={name} />
    </div>
  );
});

ImageAsset.propTypes = {
  name: PropTypes.oneOf(Object.values(AssetsNames)).isRequired,
};
