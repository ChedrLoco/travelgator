/* eslint-disable new-cap */

import express from 'express';
import Person from '../models/person';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('people/index');
});

router.get('/new', (req, res) => {
  res.render('people/new');
});

router.get('/:id', (req, res) => {
  res.render('people/show');
});

router.post('/', (req, res) => {
  const p = new Person(req.body);
  p.save(() => {
    res.redirect('/people');
  });
});
