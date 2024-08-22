export const InputTypes = Object.freeze({
  TEXT: "text",
  NUMBER: "number",
  CURRENCY: "currency",
});

export const getInputType = (type) => {
  switch (type) {
    case InputTypes.NUMBER:
    case InputTypes.CURRENCY:
      return "number";
    case InputTypes.TEXT:
    default:
      return "text";
  }
};

export const InputValidations = Object.freeze({
  REQUIRED: (fieldLabel) => ({
    required: { value: true, message: `${fieldLabel} is required` },
  }),
  MIN: (fieldLabel, value) => ({
    min: {
      value,
      message: `${fieldLabel} must be greater than ${value}`,
    },
  }),
  MAX: (fieldLabel, value) => ({
    max: { value, message: `${fieldLabel} must be less than ${value}` },
  }),
  MIN_LENGTH: (fieldLabel, value) => ({
    minLength: {
      value,
      message: `${fieldLabel} must have at least ${value} characters`,
    },
  }),
  MAX_LENGTH: (fieldLabel, value) => ({
    maxLength: {
      value,
      message: `${fieldLabel} must have at most ${value} characters`,
    },
  }),
  PATTERN: (fieldLabel, value) => ({
    pattern: {
      value,
      message: `${fieldLabel} is invalid`,
    },
  }),
});
