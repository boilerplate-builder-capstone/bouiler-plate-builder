const template = require('express').Router();
const Template = require('../db/models/Template');
const User = require('../db/models/User')

template.get('/', async (req, res, next) => {
  try {
    const allTemplates = await Template.findAll();
    res.status(200).send(allTemplates);
  } catch (error) {
    console.log('error in user template router ', error);
    next(error);
  }
});

template.get('/:id', async (req, res, next) => {
  try {
    const singleTemplate = await Template.findByPk(req.params.id, {
      include: [User]
    });
    res.status(200).send(singleTemplate);
  } catch (error) {
    console.log('error in single template router ', error);
    next(error);
  }
});

//delete template route
template.delete('/:id', async (req, res, next) => {
  try {
    const singleTemplate = await Template.findByPk(req.params.id);
    await singleTemplate.destroy();
    res.sendStatus(204)
  } catch (error) {
    console.log('error in deleting template router ', error);
    next(error);
  }
});

//create template route
template.post('/', async (req, res, next) => {
  try {
    const {name, templateJSON, userId} = req.body;
    const newTemplate = await Template.create({name, templateJSON, userId});
    res.status(201).send(newTemplate);
  } catch (error) {
    console.log('error in creating template router ', error);
    next(error);
  }
})

module.exports = template;
