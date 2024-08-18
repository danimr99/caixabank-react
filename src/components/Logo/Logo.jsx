import PropTypes from "prop-types";

import { Logos, getLogoSrc, getLogoSize } from "./logos";

import "./Logo.css";

export const Logo = ({ name }) => {
  return (
    <div className="logo-container">
      <img {...getLogoSize(name)} src={getLogoSrc(name)} alt={name} />
    </div>
  );
};

Logo.propTypes = {
  name: PropTypes.oneOf(Object.values(Logos)).isRequired,
};
