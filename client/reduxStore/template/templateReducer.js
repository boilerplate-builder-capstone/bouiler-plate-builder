import types from '../type';


const templateReducer = (state = [], action) => {
  if (action.type === types.CREATE_TEMPLATE) {
    return [action.template, ...state]
  }
  if (action.type === types.DELETE_TEMPLATE) {
    return state.filter((template) => template.id !== action.template.id);
  }
  if (action.type === types.GET_TEMPLATES) {
    return (state = action.templates)
  }
  return state;
};

export default templateReducer;
