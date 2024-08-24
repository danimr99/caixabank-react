import { Banks } from "../../constants";

export const Assets = Object.freeze({
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
  BOT: {
    id: "bot",
    src: "/assets/bot.png",
    size: { width: 150, height: 150 },
  },
});

export const AssetsNames = Object.entries(Assets).reduce(
  (acc, [key, value]) => {
    acc[key] = value?.id;
    return acc;
  },
  {}
);
