import { memo } from "react";
import PropTypes from "prop-types";

import { LogoNames } from "./logos";
import { getLogoById } from "../../utils";

import "./Logo.css";

export const Logo = memo(function Logo({ name }) {
  const logo = getLogoById(name);

  return (
    <div className="logo-container">
      <img {...logo?.size} src={logo?.src} alt={name} />
    </div>
  );
});

Logo.propTypes = {
  name: PropTypes.oneOf(Object.values(LogoNames)).isRequired,
};
