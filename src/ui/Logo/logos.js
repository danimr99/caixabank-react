import { Banks } from "../../constants";

export const Logos = Object.freeze({
  CAIXABANK: {
    id: "caixabank",
    name: Banks.CAIXABANK,
    src: "/assets/caixabank.png",
    size: { width: 64, height: 48 },
  },
  CAIXABANK_ALT: {
    id: "caixabank-alt",
    name: Banks.CAIXABANK,
    src: "/assets/caixabank-alt.png",
    size: { width: 64, height: 48 },
  },
  IMAGIN: {
    id: "imagin",
    name: Banks.IMAGIN,
    src: "/assets/imagin.png",
    size: { width: 48, height: 48 },
  },
});

export const LogoNames = Object.entries(Logos).reduce((acc, [key, value]) => {
  acc[key] = value?.id;
  return acc;
}, {});
