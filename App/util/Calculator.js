export const initialState = {
  currentValue: 0,
  operator: null,
  previousValue: null,
};

export const handleNumber = (state, value) => {
  if (state.currentValue === 0) {
    return { currentValue: `${value}` };
  }
  return { currentValue: `${state.currentValue}${value}` };
};

export const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null,
  };
  if (operator === "/") {
    return {
      currentValue: previous / current,
      ...resetState,
    };
  }
  if (operator === "*") {
    return {
      currentValue: previous * current,
      ...resetState,
    };
  }
  if (operator === "+") {
    return {
      currentValue: previous + current,
      ...resetState,
    };
  }
  if (operator === "-") {
    return {
      currentValue: previous - current,
      ...resetState,
    };
  }
  return state;
};

const Calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(state, value);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: 0,
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: state.currentValue * -1,
      };
    case "percentage":
      return {
        currentValue: state.currentValue * 0.01,
      };
    default:
      return state;
  }
};

export default Calculator;