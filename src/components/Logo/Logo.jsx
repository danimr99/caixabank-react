import PropTypes from "prop-types";

import { Logos } from "../../constants";

import "./Logo.css";

export const Logo = ({ variant }) => {
  const getLogoSrc = () => {
    switch (variant) {
      case Logos.CAIXABANK:
        return "assets/caixabank-icon-blue.png";

      case Logos.CAIXABANK_VARIANT:
        return "assets/caixabank-icon.png";

      case Logos.IMAGIN:
        return "assets/imagin-icon.png";

      default:
        throw new Error(`Logo ${variant} not found`);
    }
  };

  const getLogoSize = () => {
    switch (variant) {
      case Logos.CAIXABANK:
      case Logos.CAIXABANK_VARIANT:
        return { width: 64, height: 48 };

      case Logos.IMAGIN:
        return { width: 48, height: 48 };

      default:
        throw new Error(`Logo ${variant} not found`);
    }
  };

  return (
    <div className="logo-container">
      <img {...getLogoSize()} src={getLogoSrc()} alt={`${variant} logo`} />
    </div>
  );
};

Logo.propTypes = {
  variant: PropTypes.oneOf(Object.values(Logos)).isRequired,
};
