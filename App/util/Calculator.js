export const initialState = {
  currentValue: 0,
  operator: null,
  previousValue: null,
};

const Calculator = (type, value, state) => {
  if (type === "number") {
    if (state.currentValue === 0) {
      return { currentValue: `${value}` };
    }
    return { currentValue: `${state.currentValue}${value}` };
  }

  if (type === "operator") {
    return {
      operator: value,
      previousValue: state.currentValue,
      currentValue: 0,
    };
  }

  if (type === "equal") {
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
  }
  if (type === "clear") {
    return initialState;
  }
  if (type === "posneg") {
    return {
      currentValue: state.currentValue * -1,
    };
  }
  if (type === "percentage") {
    return {
      currentValue: state.currentValue * 0.01,
    };
  }

  return state;
};

export default Calculator;
