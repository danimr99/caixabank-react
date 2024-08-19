import { Banks } from "../../constants";

export const Logos = Object.freeze({
  ...Banks,
  CAIXABANK_ALT: "CaixaBank white",
});

export const getLogoSrc = (logo) => {
  switch (logo) {
    case Banks.CAIXABANK:
      return "/assets/caixabank-icon-blue.png";

    case Logos.CAIXABANK_ALT:
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
    case Logos.CAIXABANK_ALT:
      return { width: 64, height: 48 };

    case Logos.IMAGIN:
      return { width: 48, height: 48 };

    default:
      throw new Error(`Logo ${logo} not found`);
  }
};
