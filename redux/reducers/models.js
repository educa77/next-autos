function models(state = { models: [], order: [], model: [] }, action) {
  switch (action.type) {
    case "GET_MODELS":
      return {
        ...state,
        models: action.payload,
      };
    case "GET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    case "GET_ONE_MODEL":
      return {
        ...state,
        model: action.payload,
      };

    default:
      return state;
  }
}

export { models };
