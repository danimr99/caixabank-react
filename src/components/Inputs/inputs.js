export const InputTypes = Object.freeze({
  TEXT: "text",
  NUMBER: "number",
  CURRENCY: "currency",
});

export const getInputType = (type) => {
  switch (type) {
    case InputTypes.TEXT:
      return "text";

    case InputTypes.NUMBER:
    case InputTypes.CURRENCY:
      return "number";

    default:
      return "text";
  }
};
