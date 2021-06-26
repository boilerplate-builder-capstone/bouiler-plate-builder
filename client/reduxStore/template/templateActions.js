import axios from 'axios';
import types from '../type';


export const createTemplate = (TemplateToCreate) => {
  return async (dispatch) => {
    try{
      const newTemplate = (await axios.post('/api/templates', TemplateToCreate)).data;
      dispatch(_createTemplate(newTemplate));
    }catch(error) {
      console.log(error);
    }
  };
};

export const _createTemplate = (template) => {
  return {
    type: types.CREATE_TEMPLATE,
    template
  }
}

export const deleteTemplate = (template) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/templates/${template.id}`);
      dispatch(_deleteTemplate(template))
    } catch (error){
      console.log(error)
    }
  }
}

export const _deleteTemplate = (template) => {
  return {
    type: types.DELETE_TEMPLATE,
    template,
  };
};

export const getTemplates = () => {
  return async (dispatch) => {
    try {
      const templates = (await axios.get('/api/templates')).data
      dispatch(_getTemplates(templates))
    } catch (error) {
      console.log(error)
    }
  }
}

export const _getTemplates = (templates) => {
  return {
    type: types.GET_TEMPLATES,
    templates,
  };
};


