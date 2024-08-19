import { Banks } from "../../constants";

export const Logos = Object.freeze({
  ...Banks,
  NAVIGATION_BAR_CAIXABANK: "NavigationBar CaixaBank",
});

export const getLogoSrc = (logo) => {
  switch (logo) {
    case Logos.CAIXABANK:
      return "/assets/caixabank-icon-blue.png";

    case Logos.NAVIGATION_BAR_CAIXABANK:
      return "/assets/caixabank-icon.png";

    case Logos.IMAGIN:
      return "/assets/imagin-icon.png";

    default:
      throw new Error(`Logo ${logo} not found`);
  }
};

export const getLogoSize = (logo) => {
  switch (logo) {
    case Logos.CAIXABANK:
    case Logos.NAVIGATION_BAR_CAIXABANK:
      return { width: 64, height: 48 };

    case Logos.IMAGIN:
      return { width: 48, height: 48 };

    default:
      throw new Error(`Logo ${logo} not found`);
  }
};
